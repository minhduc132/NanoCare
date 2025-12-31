import { Metadata } from 'next';
import BlogListing from '../../components/blog/BlogListing';
import { loadBlogs } from '../../lib/data-loader';

export const metadata: Metadata = {
    title: 'News & Blog | Nanocare',
    description: 'Latest news, articles and updates about nasal care, respiratory health and Nanocare products.',
    keywords: ['nasal care news', 'respiratory health blog', 'nasal rinse articles', 'nanocare blog'],
    openGraph: {
        title: 'Nanocare News & Blog',
        description: 'Latest news and articles about nasal care',
        type: 'website',
    },
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
    const blogs = loadBlogs();
    return <BlogListing blogs={blogs} />;
}

