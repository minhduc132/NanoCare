'use client';

import React from 'react';
import Link from 'next/link';
import { BlogListItem } from '../../lib/data-loader';

interface BlogListingProps {
    blogs: BlogListItem[];
    isPreview?: boolean;
}

const BlogListing = ({ blogs, isPreview = false }: BlogListingProps) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const content = (
        <>
            {!isPreview && (
                <>
                    {/* Page Title - H1 for SEO */}
                    <h1 className="font-bold text-2xl sm:text-3xl lg:text-[36px] text-center mb-4 sm:mb-6 lg:mb-8">
                        <span className="text-[rgb(111,95,53)]">News</span>{' '}
                        <span className="text-[rgb(225,162,0)]">& Blog</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                        Latest news, articles and updates about nasal care, respiratory health and Nanocare products.
                    </p>
                </>
            )}

            {/* Blog Posts Grid */}
            <div className={`grid grid-cols-1 ${isPreview ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6 sm:gap-8 lg:gap-10`}>
                    {blogs.map((post) => (
                        <article key={post.slug} className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <Link href={`/blog/${post.slug}`}>
                                <div 
                                    className="w-full h-[200px] sm:h-[250px] bg-cover bg-center" 
                                    style={{ backgroundImage: `url(${post.image})` }}
                                    role="img"
                                    aria-label={`${post.title} featured image`}
                                ></div>
                            </Link>
                            <div className="p-4 sm:p-6 flex-1 flex flex-col">
                                <div className="mb-3">
                                    <span className="inline-block px-3 py-1 bg-[rgb(225,162,0)] text-white text-xs font-bold rounded">
                                        {post.category}
                                    </span>
                                    <time className="block text-sm text-gray-500 mt-2" dateTime={post.date}>
                                        {formatDate(post.date)}
                                    </time>
                                </div>
                                
                                <Link href={`/blog/${post.slug}`}>
                                    <h2 className="text-xl sm:text-2xl font-bold text-[rgb(34,34,34)] mb-3 hover:text-[rgb(225,162,0)] transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>
                                
                                <p className="text-base text-gray-700 mb-4 flex-1 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-[rgb(225,162,0)] font-semibold hover:underline inline-flex items-center gap-2"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </article>
                    ))}
            </div>

            {!isPreview && (
                <>
                    {/* Internal Links Section for SEO */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <h2 className="text-xl sm:text-2xl font-bold text-[rgb(111,95,53)] mb-6">
                            Related Links
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/products" className="text-[rgb(225,162,0)] hover:underline">
                                Products
                            </Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/resources" className="text-[rgb(225,162,0)] hover:underline">
                                Resources
                            </Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/contact" className="text-[rgb(225,162,0)] hover:underline">
                                Contact
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );

    if (isPreview) {
        return (
            <div className="font-[var(--font-poppins)]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12">
                    <div>
                        <h2 className="font-[var(--font-poppins)] text-2xl sm:text-3xl lg:text-[36px] mb-4">
                            <span className="text-[rgb(111,95,53)]">News</span>{' '}
                            <span className="text-[rgb(225,162,0)]">& Blog</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                            Latest news, articles and updates about nasal care, respiratory health and Nanocare products.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="mt-4 sm:mt-0 px-6 py-3 bg-[rgb(225,162,0)] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                        View All
                    </Link>
                </div>
                {content}
            </div>
        );
    }

    return (
        <main className="min-h-screen font-[var(--font-poppins)] bg-gradient-to-b from-gray-50 to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:py-12 lg:py-16">
                {content}
            </div>
        </main>
    );
};

export default BlogListing;

