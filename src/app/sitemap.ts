import { MetadataRoute } from 'next';

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
    
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    vi: `${baseUrl}/vi`,
                },
            },
        },
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/vi`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}

