import { Metadata } from 'next';
import BlogListing from '../../components/blog/BlogListing';
import { loadBlogs } from '../../lib/data-loader';

export const metadata: Metadata = {
    title: 'News & Blog | Nanocare',
    description: 'Latest news, articles and updates about nasal care, respiratory health and Nanocare products.',
    keywords: ['nasal care news', 'respiratory health blog', 'nasal rinse articles', 'nanocare blog'],
    openGraph: {
        title: 'News & Blog | Nanocare',
        description: 'Latest news, articles and updates about nasal care, respiratory health and Nanocare products.',
        type: 'website',
        url: '/blog',
        siteName: 'Nanocare',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'News & Blog | Nanocare',
        description: 'Latest news, articles and updates about nasal care, respiratory health and Nanocare products.',
    },
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
    const blogs = loadBlogs();
    return <BlogListing blogs={blogs} />;
}

