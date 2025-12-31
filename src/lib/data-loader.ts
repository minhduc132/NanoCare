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
 * Load products list from products.md
 */
export function loadProducts(): ProductListItem[] {
    try {
        const filePath = path.join(dataDirectory, 'products.md');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        // Split by --- separator
        const sections = fileContents.split(/^---$/gm).filter(s => s.trim() && !s.trim().startsWith('#'));
        
        const products: ProductListItem[] = [];
        
        for (const section of sections) {
            // Wrap section in --- markers for proper frontmatter parsing
            const wrappedSection = `---\n${section.trim()}\n---`;
            const { data } = matter(wrappedSection);
            
            if (data.id && data.slug) {
                products.push({
                    id: String(data.id),
                    slug: String(data.slug),
                    name: String(data.name || ''),
                    category: String(data.category || ''),
                    image: String(data.image || ''),
                });
            }
        }
        
        return products;
    } catch (error) {
        console.error('Error loading products:', error);
        return [];
    }
}

/**
 * Load product details from product-detail.md
 */
export function loadProductDetails(): Record<string, ProductDetail> {
    try {
        const filePath = path.join(dataDirectory, 'product-detail.md');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        // Split by --- separator
        const sections = fileContents.split(/^---$/gm).filter(s => s.trim());
        
        const details: Record<string, ProductDetail> = {};
        
        for (const section of sections) {
            // Wrap section in --- markers for proper frontmatter parsing
            const wrappedSection = `---\n${section.trim()}\n---`;
            const { data } = matter(wrappedSection);
            
            if (data.slug) {
                details[data.slug] = {
                    slug: data.slug,
                    images: data.images || [],
                    description: data.description || '',
                    specifications: data.specifications || [],
                    benefits: data.benefits || [],
                    content: data.content || '',
                };
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
 * Load blogs list from blogs.md
 */
export function loadBlogs(): BlogListItem[] {
    try {
        const filePath = path.join(dataDirectory, 'blogs.md');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        // Split by --- separator
        const sections = fileContents.split(/^---$/gm).filter(s => s.trim() && !s.trim().startsWith('#'));
        
        const blogs: BlogListItem[] = [];
        
        for (const section of sections) {
            // Wrap section in --- markers for proper frontmatter parsing
            const wrappedSection = `---\n${section.trim()}\n---`;
            const { data } = matter(wrappedSection);
            
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
 * Load blog details from blog-detail.md
 */
export function loadBlogDetails(): Record<string, BlogDetail> {
    try {
        const filePath = path.join(dataDirectory, 'blog-detail.md');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        // Split by --- separator
        const sections = fileContents.split(/^---$/gm).filter(s => s.trim());
        
        const details: Record<string, BlogDetail> = {};
        
        for (const section of sections) {
            // Wrap section in --- markers for proper frontmatter parsing
            const wrappedSection = `---\n${section.trim()}\n---`;
            const { data, content } = matter(wrappedSection);
            
            if (data.slug) {
                details[data.slug] = {
                    slug: data.slug,
                    content: content || '',
                };
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
    return loadComponentData<FeaturedProductsData>('featured-products.md');
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

export function loadResourcesListingData(): ResourcesListingData | null {
    return loadComponentData<ResourcesListingData>('resources-listing.md');
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

