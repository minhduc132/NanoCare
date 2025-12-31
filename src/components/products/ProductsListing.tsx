'use client';

import React from 'react';
import Link from 'next/link';
import { ProductListItem } from '../../lib/data-loader';

interface ProductsListingProps {
    products: ProductListItem[];
}

const ProductsListing = ({ products }: ProductsListingProps) => {
    // Group products by category
    const productsByCategory = products.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {} as Record<string, ProductListItem[]>);

    return (
        <main className="min-h-screen font-[var(--font-hind)] bg-gradient-to-b from-gray-50 to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
                {/* Page Title with Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-600">
                    <Link href="/" className="hover:text-[rgb(225,162,0)] transition-colors">
                        Home
                    </Link>
                    {' / '}
                    <span className="text-gray-800 font-semibold">Products Nanocare</span>
                </nav>
                
                <div className="mb-8 sm:mb-12">
                    <h1 className="font-bold text-3xl sm:text-4xl lg:text-[42px] text-left mb-3">
                        <span className="text-[rgb(111,95,53)]">Products</span>{' '}
                        <span className="text-[rgb(225,162,0)]">Nanocare</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                        Discover our complete collection of high-quality nasal care products from Nanocare.
                    </p>
                </div>

                {/* Products Grid by Category */}
                {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
                    <div key={category} className="mb-12 sm:mb-16 lg:mb-20">
                        {/* Category Title */}
                        <div className="flex items-center gap-2 mb-6 sm:mb-8">
                            <div className="flex flex-row gap-1">
                                <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                                <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                                <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                            </div>
                            <h2 className="font-bold text-lg sm:text-xl lg:text-[24px] text-[rgb(111,95,53)]">
                                {category}
                            </h2>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                            {categoryProducts.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/products/${product.slug}`}
                                    className="group flex flex-col bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[rgb(225,162,0)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="w-full h-[220px] sm:h-[260px] lg:h-[280px] bg-gray-100 rounded-t-xl overflow-hidden relative">
                                        <div 
                                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${product.image})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="p-5 sm:p-6 bg-white">
                                        <h3 className="text-base sm:text-lg text-[rgb(34,34,34)] leading-[1.5] font-bold mb-2 group-hover:text-[rgb(225,162,0)] transition-colors">
                                            {product.name.split('\n').map((line, i, arr) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    {i < arr.length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-[rgb(225,162,0)] font-semibold mt-3">
                                            <span>View Details</span>
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default ProductsListing;

