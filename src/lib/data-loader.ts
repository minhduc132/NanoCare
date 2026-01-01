/**
 * Data Loader Utility
 * 
 * This utility loads data from markdown files in /public/data
 * and parses them into usable formats for the application.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dataDirectory = path.join(process.cwd(), 'public/data');

// Product Interfaces
export interface ProductListItem {
    id: string;
    slug: string;
    name: string;
    category: string;
    image: string;
}

export interface ProductDetail {
    slug: string;
    images?: string[];
    description: string;
    specifications: string[];
    benefits: string[];
    content?: string;
}

// Blog Interfaces
export interface BlogListItem {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
}

export interface BlogDetail {
    slug: string;
    content: string;
}

/**
 * Load products list from product1.md to product11.md
 */
export function loadProducts(): ProductListItem[] {
    try {
        const products: ProductListItem[] = [];
        
        // Load from product1.md to product11.md
        for (let i = 1; i <= 11; i++) {
            try {
                const filePath = path.join(dataDirectory, `product${i}.md`);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data } = matter(fileContents);
                
                if (data.id && data.slug) {
                    products.push({
                        id: String(data.id),
                        slug: String(data.slug),
                        name: String(data.name || ''),
                        category: String(data.category || ''),
                        image: String(data.image || ''),
                    });
                }
            } catch (fileError) {
                console.warn(`Error loading product${i}.md:`, fileError);
                // Continue loading other products even if one fails
            }
        }
        
        // Sort by id to maintain order
        return products.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    } catch (error) {
        console.error('Error loading products:', error);
        return [];
    }
}

/**
 * Load product details from product1.md to product11.md (merged files)
 */
export function loadProductDetails(): Record<string, ProductDetail> {
    try {
        const details: Record<string, ProductDetail> = {};
        
        // Load from product1.md to product11.md (each file contains both product and detail info)
        for (let i = 1; i <= 11; i++) {
            try {
                const filePath = path.join(dataDirectory, `product${i}.md`);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data, content } = matter(fileContents);
                
                if (data.slug) {
                    details[data.slug] = {
                        slug: data.slug,
                        images: data.images || [],
                        description: data.description || '',
                        specifications: data.specifications || [],
                        benefits: data.benefits || [],
                        content: data.content || content || '',
                    };
                }
            } catch (fileError) {
                console.warn(`Error loading product${i}.md:`, fileError);
                // Continue loading other product details even if one fails
            }
        }
        
        return details;
    } catch (error) {
        console.error('Error loading product details:', error);
        return {};
    }
}

/**
 * Get product detail by slug
 */
export function getProductDetail(slug: string): ProductDetail | null {
    const details = loadProductDetails();
    return details[slug] || null;
}

/**
 * Load blogs list from blog1.md to blog4.md
 */
export function loadBlogs(): BlogListItem[] {
    try {
        const blogs: BlogListItem[] = [];
        
        // Load from blog1.md to blog4.md
        for (let i = 1; i <= 4; i++) {
            try {
                const filePath = path.join(dataDirectory, `blog${i}.md`);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data } = matter(fileContents);
                
                if (data.slug) {
                    blogs.push({
                        slug: String(data.slug),
                        title: String(data.title || ''),
                        excerpt: String(data.excerpt || ''),
                        image: String(data.image || ''),
                        date: String(data.date || ''),
                        category: String(data.category || ''),
                    });
                }
            } catch (fileError) {
                console.warn(`Error loading blog${i}.md:`, fileError);
                // Continue loading other blogs even if one fails
            }
        }
        
        // Sort by date descending
        return blogs.sort((a, b) => {
            if (a.date < b.date) return 1;
            if (a.date > b.date) return -1;
            return 0;
        });
    } catch (error) {
        console.error('Error loading blogs:', error);
        return [];
    }
}

/**
 * Load blog details from blog1.md to blog4.md (merged files)
 */
export function loadBlogDetails(): Record<string, BlogDetail> {
    try {
        const details: Record<string, BlogDetail> = {};
        
        // Load from blog1.md to blog4.md (each file contains both blog and detail info)
        for (let i = 1; i <= 4; i++) {
            try {
                const filePath = path.join(dataDirectory, `blog${i}.md`);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data, content } = matter(fileContents);
                
                if (data.slug) {
                    details[data.slug] = {
                        slug: data.slug,
                        content: data.content || content || '',
                    };
                }
            } catch (fileError) {
                console.warn(`Error loading blog${i}.md:`, fileError);
                // Continue loading other blog details even if one fails
            }
        }
        
        return details;
    } catch (error) {
        console.error('Error loading blog details:', error);
        return {};
    }
}

/**
 * Get blog detail by slug
 */
export function getBlogDetail(slug: string): BlogDetail | null {
    const details = loadBlogDetails();
    return details[slug] || null;
}

/**
 * Load component data from markdown files
 */
function loadComponentData<T>(filename: string): T | null {
    try {
        const filePath = path.join(dataDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        return data as T;
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
        return null;
    }
}

// Hero data
export interface HeroData {
    title: string;
    cta: string;
}

export function loadHeroData(): HeroData | null {
    return loadComponentData<HeroData>('hero.md');
}

// About data
export interface AboutData {
    headlineHighlight: string;
    headlineRest: string;
    linkText: string;
    card1Text: string;
    card2Text: string;
    card3Text: string;
}

export function loadAboutData(): AboutData | null {
    return loadComponentData<AboutData>('about.md');
}

// Offerings data
export interface OfferingsData {
    titleHighlight: string;
    titleRest: string;
    card1Title: string;
    card2Title: string;
    card3Title: string;
}

export function loadOfferingsData(): OfferingsData | null {
    return loadComponentData<OfferingsData>('offerings.md');
}

// Team data
export interface TeamData {
    title: string;
    description: string;
    roleExport: string;
    roleBrand: string;
    roleProduction: string;
    member1Name: string;
    member2Name: string;
    member3Name: string;
}

export function loadTeamData(): TeamData | null {
    return loadComponentData<TeamData>('team.md');
}

// Additional Services data
export interface AdditionalServicesData {
    title: string;
    labTitle: string;
    labDesc: string;
    odmTitle: string;
    odmDesc: string;
}

export function loadAdditionalServicesData(): AdditionalServicesData | null {
    return loadComponentData<AdditionalServicesData>('additional-services.md');
}

// Certificates data
export interface CertificatesData {
    title: string;
}

export function loadCertificatesData(): CertificatesData | null {
    return loadComponentData<CertificatesData>('certificates.md');
}

// Featured Products data
export interface FeaturedProductItem {
    text: string;
    image: string;
    slug?: string;
    hasLeftChevron?: boolean;
    hasRightChevron?: boolean;
}

export interface FeaturedProductCategory {
    title: string;
    items: FeaturedProductItem[];
}

export interface FeaturedProductsData {
    titleLine1: string;
    titleLine2: string;
    categories: FeaturedProductCategory[];
}

export function loadFeaturedProductsData(): FeaturedProductsData | null {
    try {
        // Load products from individual files
        const products = loadProducts();
        
        // Group products by category
        const categoriesMap: Record<string, FeaturedProductItem[]> = {};
        
        products.forEach((product, index) => {
            if (!categoriesMap[product.category]) {
                categoriesMap[product.category] = [];
            }
            
            categoriesMap[product.category].push({
                text: product.name,
                image: product.image,
                slug: product.slug,
                hasLeftChevron: index === 0 || (index > 0 && products[index - 1].category !== product.category),
                hasRightChevron: index === products.length - 1 || (index < products.length - 1 && products[index + 1].category !== product.category),
            });
        });
        
        // Convert to categories array
        const categories: FeaturedProductCategory[] = Object.entries(categoriesMap).map(([title, items]) => ({
            title,
            items,
        }));
        
        return {
            titleLine1: 'Featured',
            titleLine2: 'Products',
            categories,
        };
    } catch (error) {
        console.error('Error loading featured products data:', error);
        return null;
    }
}

// Partner data
export interface PartnerData {
    titleLine1: string;
    titleLine2: string;
    description: string;
    benefitsTitleLine1: string;
    benefitsTitleLine2: string;
    benefitDiscountTitle: string;
    benefitDiscountDesc: string;
    benefitMarketingTitle: string;
    benefitMarketingDesc: string;
    benefitTechnicalTitle: string;
    benefitTechnicalDesc: string;
}

export function loadPartnerData(): PartnerData | null {
    return loadComponentData<PartnerData>('partner.md');
}

// Media Resources data
export interface MediaResourcesData {
    titleLine1: string;
    titleLine2: string;
    viewAll: string;
    download: string;
}

export function loadMediaResourcesData(): MediaResourcesData | null {
    return loadComponentData<MediaResourcesData>('media-resources.md');
}

// Blog Preview data
export interface BlogPreviewData {
    titleLine1: string;
    titleLine2: string;
    description: string;
    viewAll: string;
    readMore: string;
}

export function loadBlogPreviewData(): BlogPreviewData | null {
    return loadComponentData<BlogPreviewData>('blog-preview.md');
}

// Contact data
export interface ContactData {
    titleContact: string;
    titleUs: string;
    headquarters: string;
    address: string;
    phone: string;
    phoneNumber: string;
    email: string;
    emailAddress: string;
    welcome: string;
    description: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
}

export function loadContactData(): ContactData | null {
    return loadComponentData<ContactData>('contact.md');
}

// Footer data
export interface FooterData {
    disclaimer: string;
    copyright: string;
}

export function loadFooterData(): FooterData | null {
    return loadComponentData<FooterData>('footer.md');
}

// Resources Listing data
export interface ResourceItem {
    id: string;
    title: string;
    image: string;
    type: 'gated' | 'direct';
    fileUrl?: string;
}

export interface ResourcesListingData {
    titleLine1: string;
    titleLine2: string;
    description: string;
    gatedTitle: string;
    gatedDescription: string;
    directTitle: string;
    directDescription: string;
    gatedBadge: string;
    directBadge: string;
    requestAccess: string;
    download: string;
    resources: ResourceItem[];
}

/**
 * Load resources list from resource1.md to resource8.md
 */
export function loadResources(): ResourceItem[] {
    try {
        const resources: ResourceItem[] = [];
        
        // Load from resource1.md to resource8.md
        for (let i = 1; i <= 8; i++) {
            try {
                const filePath = path.join(dataDirectory, `resource${i}.md`);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data } = matter(fileContents);
                
                if (data.id) {
                    resources.push({
                        id: String(data.id),
                        title: String(data.title || ''),
                        image: String(data.image || ''),
                        type: (data.type === 'gated' || data.type === 'direct') ? data.type : 'direct',
                        fileUrl: data.fileUrl ? String(data.fileUrl) : undefined,
                    });
                }
            } catch (fileError) {
                console.warn(`Error loading resource${i}.md:`, fileError);
                // Continue loading other resources even if one fails
            }
        }
        
        // Sort by id to maintain order
        return resources.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    } catch (error) {
        console.error('Error loading resources:', error);
        return [];
    }
}

export function loadResourcesListingData(): ResourcesListingData | null {
    try {
        // Load metadata from resources-listing.md
        const metadata = loadComponentData<Omit<ResourcesListingData, 'resources'>>('resources-listing.md');
        if (!metadata) return null;
        
        // Load resources from individual files
        const resources = loadResources();
        
        return {
            ...metadata,
            resources,
        };
    } catch (error) {
        console.error('Error loading resources listing data:', error);
        return null;
    }
}

// Resource Modal data
export interface ResourceModalData {
    formTitle: string;
    formResourceLabel: string;
    formDescription: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formEmailLabel: string;
    formEmailPlaceholder: string;
    formPhoneLabel: string;
    formPhonePlaceholder: string;
    formCancel: string;
    formSubmit: string;
    formSubmitting: string;
    formError: string;
    formSuccessTitle: string;
    formSuccessMessage: string;
    formSuccessClose: string;
}

export function loadResourceModalData(): ResourceModalData | null {
    return loadComponentData<ResourceModalData>('resource-modal.md');
}

// Products Listing data
export interface ProductsListingData {
    titleLine1: string;
    titleLine2: string;
    description: string;
    viewDetails: string;
    navHome: string;
}

export function loadProductsListingData(): ProductsListingData | null {
    return loadComponentData<ProductsListingData>('products-listing.md');
}

// Product Detail texts data
export interface ProductDetailTextsData {
    description: string;
    descriptionText: string;
    specifications: string;
    benefits: string;
    contactUs: string;
    requestConsultation: string;
    relatedProducts: string;
    viewAllProducts: string;
    productsTitleLine1: string;
    productsTitleLine2: string;
    navHome: string;
}

export function loadProductDetailTextsData(): ProductDetailTextsData | null {
    return loadComponentData<ProductDetailTextsData>('product-detail-texts.md');
}

// Blog Listing data
export interface BlogListingData {
    titleLine1: string;
    titleLine2: string;
    description: string;
    readMore: string;
    relatedLinksTitle: string;
    relatedLinksProducts: string;
    relatedLinksResources: string;
    relatedLinksContact: string;
}

export function loadBlogListingData(): BlogListingData | null {
    return loadComponentData<BlogListingData>('blog-listing.md');
}

// Blog Detail texts data
export interface BlogDetailTextsData {
    titleLine1: string;
    titleLine2: string;
    relatedProductsTitle: string;
    relatedProductsDescription: string;
    relatedProductsLink: string;
    backToBlog: string;
    navHome: string;
}

export function loadBlogDetailTextsData(): BlogDetailTextsData | null {
    return loadComponentData<BlogDetailTextsData>('blog-detail-texts.md');
}

