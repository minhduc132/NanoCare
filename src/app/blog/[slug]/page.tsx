import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogDetail from '../../../components/blog/BlogDetail';
import { loadBlogs, getBlogDetail } from '../../../lib/data-loader';

export const dynamicParams = false; // Return 404 for unknown slugs

export async function generateStaticParams() {
    const blogs = loadBlogs();
    console.log('Generating static params for blogs:', blogs.length);
    return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}): Promise<Metadata> {
    const { slug } = await params;
    const blogs = loadBlogs();
    const post = blogs.find(b => b.slug === slug);
    
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }
    
    return {
        title: `${post.title} | Nanocare`,
        description: post.excerpt,
        keywords: ['nasal care blog', 'nanocare news', 'nasal rinse', 'respiratory health'],
        openGraph: {
            title: `${post.title} | Nanocare`,
            description: post.excerpt,
            images: [post.image],
            type: 'article',
            publishedTime: post.date,
        },
        alternates: {
            canonical: `/blog/${slug}`,
        },
    };
}

export default async function BlogDetailPage({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}) {
    const { slug } = await params;
    const blogs = loadBlogs();
    const post = blogs.find(b => b.slug === slug);
    
    if (!post) {
        notFound();
    }
    
    const detail = getBlogDetail(slug) || {
        slug,
        content: '',
    };
    
    return <BlogDetail post={post} detail={detail} />;
}

