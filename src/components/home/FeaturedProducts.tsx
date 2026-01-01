'use client';

import React from 'react';
import Link from 'next/link';
import { FeaturedProductsData } from '../../lib/data-loader';

interface FeaturedProductsProps {
    data: FeaturedProductsData | null;
}

const FeaturedProducts = ({ data }: FeaturedProductsProps) => {
    if (!data) return null;
    // Note: categories array is kept from markdown as it contains product data
    // Helper component for product items
    const ProductItem = ({ image, text, slug, hasLeftChevron = false, hasRightChevron = false }: { image: string; text: string; slug?: string; hasLeftChevron?: boolean; hasRightChevron?: boolean }) => {
        const content = (
                    <div className="min-w-[240px] sm:min-w-[280px] flex flex-col relative cursor-pointer group">
                        <div className="h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden relative">
                            <div 
                                className="w-full h-full bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105" 
                                style={{ backgroundImage: `url(${image})` }}
                                role="img"
                                aria-label={`${text} product image`}
                            ></div>
                    {hasLeftChevron && (
                        <div className="absolute left-2 sm:left-[10px] top-1/2 transform -translate-y-1/2 z-10">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="rgb(225,162,0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    )}
                    {hasRightChevron && (
                        <div className="absolute right-2 sm:right-[10px] top-1/2 transform -translate-y-1/2 z-10">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="rgb(225,162,0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    )}
                </div>
                <p className="text-sm sm:text-base text-[rgb(34,34,34)] leading-[1.6] mt-2 group-hover:text-[rgb(225,162,0)] transition-colors">
                    {text}
                </p>
            </div>
        );
        
        if (slug) {
            return (
                <Link href={`/products/${slug}`}>
                    {content}
                </Link>
            );
        }
        return content;
    };

    // Helper component for category section
    const CategorySection = ({ title, items }: { title: string; items: Array<{ image: string; text: string; slug?: string; hasLeftChevron?: boolean; hasRightChevron?: boolean }> }) => (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 items-start">
            <div className="w-full sm:w-48 lg:w-[240px] flex-shrink-0">
                <div className="flex items-center gap-2">
                    <div className="flex flex-row gap-1">
                        <div className="w-[4px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                        <div className="w-[4px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                        <div className="w-[4px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                    </div>
                    <h2 className="font-[var(--font-poppins)] text-base sm:text-lg lg:text-[20px] text-[rgb(111,95,53)]">
                        {title}
                    </h2>
                </div>
            </div>
            <div className="flex-1 w-full">
                <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2">
                    {items.map((item, index) => (
                        <ProductItem
                            key={index}
                            image={item.image}
                            text={item.text}
                            slug={item.slug}
                            hasLeftChevron={item.hasLeftChevron}
                            hasRightChevron={item.hasRightChevron}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative min-h-[800px] sm:min-h-[1200px] lg:min-h-[1600px] font-[var(--font-poppins)] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
                {/* Featured Products Title */}
                <h1 className="font-[var(--font-poppins)] text-xl sm:text-2xl lg:text-[28px] text-left mb-6 sm:mb-8 lg:mb-12">
                    <span className="text-[rgb(111,95,53)]">Featured</span>{' '}
                    <span className="text-[rgb(225,162,0)]">Products</span>
                </h1>

                {/* Categories */}
                {data.categories.map((category, index) => (
                    <CategorySection
                        key={index}
                        title={category.title}
                        items={category.items}
                    />
                ))}
            </div>
            <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)]"></div>
        </section>
    );
};

export default FeaturedProducts;
