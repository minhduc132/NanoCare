import { Metadata } from 'next';
import ResourcesListing from '../../components/resources/ResourcesListing';
import { loadResourcesListingData } from '../../lib/data-loader';

export const metadata: Metadata = {
    title: 'Media Resources | Nanocare',
    description: 'Download Nanocare media resources: social media banners, product catalogs, market reports and more.',
    keywords: ['media resources', 'marketing materials', 'product catalog', 'social media banners'],
    openGraph: {
        title: 'Nanocare Media Resources',
        description: 'Download Nanocare media resources',
        type: 'website',
    },
    alternates: {
        canonical: '/resources',
    },
};

export default function ResourcesPage() {
    const data = loadResourcesListingData();
    return <ResourcesListing data={data} />;
}

