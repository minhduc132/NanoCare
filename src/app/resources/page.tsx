import { Metadata } from 'next';
import ResourcesListing from '../../components/resources/ResourcesListing';
import { loadResourcesListingData } from '../../lib/data-loader';

export const metadata: Metadata = {
    title: 'Media Resources | Nanocare',
    description: 'Download Nanocare media resources: social media banners, product catalogs, market reports and more.',
    keywords: ['media resources', 'marketing materials', 'product catalog', 'social media banners'],
    openGraph: {
        title: 'Media Resources | Nanocare',
        description: 'Download Nanocare media resources: social media banners, product catalogs, market reports and more.',
        type: 'website',
        url: '/resources',
        siteName: 'Nanocare',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Media Resources | Nanocare',
        description: 'Download Nanocare media resources: social media banners, product catalogs, market reports and more.',
    },
    alternates: {
        canonical: '/resources',
    },
};

export default function ResourcesPage() {
    const data = loadResourcesListingData();
    return <ResourcesListing data={data} />;
}

