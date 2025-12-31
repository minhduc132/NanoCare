import { MetadataRoute } from 'next';
import { loadProducts } from '../lib/data-loader';
import { loadBlogs } from '../lib/data-loader';

// Get base URL - prioritize custom domain, then Vercel URL, then fallback
const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return 'https://nanocare.vercel.app'; // Fallback to Vercel subdomain
};

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl();
    const pages = [
        { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
        { path: 'products', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: 'resources', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: 'blog', priority: 0.8, changeFrequency: 'weekly' as const },
        { path: 'contact', priority: 0.7, changeFrequency: 'monthly' as const },
    ];
    
    const sitemapEntries: MetadataRoute.Sitemap = [];
    
    // Add main pages
    pages.forEach((page) => {
        sitemapEntries.push({
            url: `${baseUrl}${page.path ? `/${page.path}` : ''}`,
            lastModified: new Date(),
            changeFrequency: page.changeFrequency,
            priority: page.priority,
        });
    });
    
    // Add product pages from data-loader
    try {
        const products = loadProducts();
        products.forEach((product) => {
            sitemapEntries.push({
                url: `${baseUrl}/products/${product.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        });
    } catch (error) {
        console.error('Error loading products for sitemap:', error);
    }
    
    // Add blog pages from data-loader
    try {
        const blogs = loadBlogs();
        blogs.forEach((blog) => {
            sitemapEntries.push({
                url: `${baseUrl}/blog/${blog.slug}`,
                lastModified: new Date(blog.date),
                changeFrequency: 'weekly',
                priority: 0.7,
            });
        });
    } catch (error) {
        console.error('Error loading blogs for sitemap:', error);
    }
    
    return sitemapEntries;
}

