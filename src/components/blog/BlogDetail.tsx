'use client';

import React from 'react';
import Link from 'next/link';
import { BlogListItem, BlogDetail as BlogDetailType } from '../../lib/data-loader';

interface BlogDetailProps {
    post: BlogListItem;
    detail: BlogDetailType;
}

const BlogDetail = ({ post, detail }: BlogDetailProps) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // Split content into paragraphs for better SEO structure
    const contentParagraphs = detail.content.split('\n\n').filter(p => p.trim());

    return (
        <main className="min-h-screen font-[var(--font-hind)] bg-white">
            <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-600">
                    <Link href="/" className="hover:text-[rgb(225,162,0)]">
                        Home
                    </Link>
                    {' / '}
                    <Link href="/blog" className="hover:text-[rgb(225,162,0)]">
                        News & Blog
                    </Link>
                    {' / '}
                    <span className="text-gray-800">{post.title}</span>
                </nav>

                {/* Featured Image */}
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-cover bg-center rounded-lg mb-8" style={{ backgroundImage: `url(${post.image})` }}></div>

                {/* Article Header */}
                <header className="mb-8">
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-[rgb(225,162,0)] text-white text-xs font-bold rounded">
                            {post.category}
                        </span>
                        <time className="block text-sm text-gray-500 mt-2" dateTime={post.date}>
                            {formatDate(post.date)}
                        </time>
                    </div>
                    
                    {/* H1 for SEO */}
                    <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[rgb(34,34,34)] mb-4 leading-[1.3]">
                        {post.title}
                    </h1>
                    
                    <p className="text-lg text-gray-600 italic">
                        {post.excerpt}
                    </p>
                </header>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none mb-12">
                    {contentParagraphs.map((paragraph, index) => {
                        // Check if paragraph starts with heading markers
                        if (paragraph.startsWith('## ')) {
                            return (
                                <h2 key={index} className="text-2xl font-bold text-[rgb(111,95,53)] mt-8 mb-4">
                                    {paragraph.replace('## ', '')}
                                </h2>
                            );
                        } else if (paragraph.startsWith('### ')) {
                            return (
                                <h3 key={index} className="text-xl font-bold text-[rgb(111,95,53)] mt-6 mb-3">
                                    {paragraph.replace('### ', '')}
                                </h3>
                            );
                        } else {
                            return (
                                <p key={index} className="text-base sm:text-lg text-gray-700 leading-[1.8] mb-4">
                                    {paragraph}
                                </p>
                            );
                        }
                    })}
                </div>

                {/* Internal Links to Products for SEO */}
                <div className="bg-gray-50 rounded-lg p-6 mb-12">
                    <h2 className="text-xl font-bold text-[rgb(111,95,53)] mb-4">
                        Related Products
                    </h2>
                    <p className="text-base text-gray-700 mb-4">
                        Discover Nanocare nasal care products mentioned in this article.
                    </p>
                    <Link
                        href="/products"
                        className="inline-block text-[rgb(225,162,0)] font-semibold hover:underline"
                    >
                        View Products →
                    </Link>
                </div>

                {/* Back to Blog */}
                <div className="pt-8 border-t border-gray-200">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[rgb(225,162,0)] font-semibold hover:underline"
                    >
                        ← Back to Blog
                    </Link>
                </div>
            </article>
        </main>
    );
};

export default BlogDetail;

