'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProductListItem, ProductDetail as ProductDetailType } from '../../lib/data-loader';

interface ProductDetailProps {
    product: ProductListItem;
    detail: ProductDetailType;
}

const ProductDetail = ({ product, detail }: ProductDetailProps) => {
    const [selectedImage, setSelectedImage] = useState(product.image);
    const images = detail.images && detail.images.length > 0 ? detail.images : [product.image];

    return (
        <main className="min-h-screen font-[var(--font-hind)] bg-gradient-to-b from-gray-50 to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:py-16">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-600">
                    <Link href="/" className="hover:text-[rgb(225,162,0)]">
                        Home
                    </Link>
                    {' / '}
                    <Link href="/products" className="hover:text-[rgb(225,162,0)]">
                        Products Nanocare
                    </Link>
                    {' / '}
                    <span className="text-gray-800">{product.name.split('\n')[0]}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    {/* Left Column - Images */}
                    <div className="flex flex-col gap-4">
                        {/* Main Image */}
                        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
                            <div 
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${selectedImage})` }}
                            ></div>
                        </div>
                        
                        {/* Thumbnail Images */}
                        {images.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded border-2 transition-all ${
                                            selectedImage === img 
                                                ? 'border-[rgb(225,162,0)]' 
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <div 
                                            className="w-full h-full bg-cover bg-center rounded"
                                            style={{ backgroundImage: `url(${img})` }}
                                        ></div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="flex flex-col">
                        {/* Category */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-1.5 bg-[rgb(225,162,0)]/10 text-[rgb(225,162,0)] text-sm font-bold rounded-full">
                                {product.category}
                            </span>
                        </div>

                        {/* Product Name */}
                        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[rgb(34,34,34)] mb-6 leading-[1.3]">
                            {product.name.split('\n').map((line, i, arr) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < arr.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h1>

                        {/* Description */}
                        <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-bold text-[rgb(111,95,53)] mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-[rgb(225,162,0)]"></div>
                                Product Description
                            </h2>
                            <p className="text-base text-gray-700 leading-[1.8]">
                                {detail.description || 'High-quality nasal care product from Nanocare, designed to effectively clean nasal passages, helping you breathe freely and protect respiratory health.'}
                            </p>
                        </div>

                        {/* Specifications */}
                        {detail.specifications && detail.specifications.length > 0 && (
                            <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h2 className="text-xl sm:text-2xl font-bold text-[rgb(111,95,53)] mb-4 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-[rgb(225,162,0)]"></div>
                                    Specifications
                                </h2>
                                <ul className="space-y-3 text-base text-gray-700">
                                    {detail.specifications.map((spec, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-[rgb(225,162,0)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Benefits */}
                        {detail.benefits && detail.benefits.length > 0 && (
                            <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h2 className="text-xl sm:text-2xl font-bold text-[rgb(111,95,53)] mb-4 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-[rgb(225,162,0)]"></div>
                                    Benefits
                                </h2>
                                <ul className="space-y-3 text-base text-gray-700">
                                    {detail.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-[rgb(225,162,0)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <Link
                                href="/contact"
                                className="flex-1 h-12 sm:h-[50px] bg-[rgb(225,162,0)] text-white font-bold text-base rounded flex items-center justify-center hover:opacity-90 transition-opacity"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/contact"
                                className="flex-1 h-12 sm:h-[50px] border-2 border-[rgb(225,162,0)] text-[rgb(225,162,0)] font-bold text-base rounded flex items-center justify-center hover:bg-[rgb(225,162,0)] hover:text-white transition-colors"
                            >
                                Request Consultation
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <h2 className="text-xl sm:text-2xl font-bold text-[rgb(111,95,53)] mb-6">
                        Related Products
                    </h2>
                    <div className="text-base text-gray-600">
                        <Link href="/products" className="text-[rgb(225,162,0)] hover:underline">
                            View All Products →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;

