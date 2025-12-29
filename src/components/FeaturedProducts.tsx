'use client';

import React from 'react';
import { useT } from '../i18n/I18nProvider';

const FeaturedProducts = () => {
    const t = useT();
    
    // Helper component for product items
    const ProductItem = ({ image, text, hasLeftChevron = false, hasRightChevron = false }: { image: string; text: string; hasLeftChevron?: boolean; hasRightChevron?: boolean }) => (
        <div className="min-w-[240px] sm:min-w-[280px] flex flex-col relative">
            <div className="h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden relative">
                <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${image})` }}></div>
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
            <p className="text-sm sm:text-base text-[rgb(34,34,34)] leading-[1.6] mt-2">
                {text.split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </p>
        </div>
    );

    // Helper component for category section
    const CategorySection = ({ titleKey, items }: { titleKey: string; items: Array<{ image: string; textKey: string; hasLeftChevron?: boolean; hasRightChevron?: boolean }> }) => (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 items-start">
            <div className="w-full sm:w-48 lg:w-[240px] flex-shrink-0">
                <div className="flex items-center gap-2">
                    <div className="flex flex-row gap-1">
                        <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                        <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                        <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                    </div>
                    <h2 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-base sm:text-lg lg:text-[20px] text-[rgb(111,95,53)]">
                        {t(titleKey)}
                    </h2>
                </div>
            </div>
            <div className="flex-1 w-full">
                <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2">
                    {items.map((item, index) => (
                        <ProductItem
                            key={index}
                            image={item.image}
                            text={t(item.textKey)}
                            hasLeftChevron={item.hasLeftChevron}
                            hasRightChevron={item.hasRightChevron}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative min-h-[800px] sm:min-h-[1200px] lg:min-h-[1600px] font-[TWFucmwZSFeHRyYUxpZhLnRZg] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Featured Products Title */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-xl sm:text-2xl lg:text-[28px] text-left mb-6 sm:mb-8 lg:mb-12">
                    <span className="text-[rgb(111,95,53)]">{t('featured.title.line1')}</span>{' '}
                    <span className="text-[rgb(225,162,0)]">{t('featured.title.line2')}</span>
                </h1>

                {/* Category 1: Nasal Rinse Bottle */}
                <CategorySection
                    titleKey="featured.cat1.title"
                    items={[
                        { image: '/images/product1.png', textKey: 'featured.cat1.item1', hasLeftChevron: true },
                        { image: '/images/product2.png', textKey: 'featured.cat1.item2' },
                        { image: '/images/product3.png', textKey: 'featured.cat1.item3', hasRightChevron: true }
                    ]}
                />

                {/* Category 2: Nasal Rinse Kit for Kid */}
                <CategorySection
                    titleKey="featured.cat2.title"
                    items={[
                        { image: '/images/product4.jpg', textKey: 'featured.cat2.item1', hasLeftChevron: true },
                        { image: '/images/product5.png', textKey: 'featured.cat2.item2' },
                        { image: '/images/product6.png', textKey: 'featured.cat2.item3', hasRightChevron: true }
                    ]}
                />

                {/* Category 3: Nasal Salt Water */}
                <CategorySection
                    titleKey="featured.cat3.title"
                    items={[
                        { image: '/images/product7.png', textKey: 'featured.cat3.item1', hasLeftChevron: true },
                        { image: '/images/product8.png', textKey: 'featured.cat3.item2' },
                        { image: '/images/product9.png', textKey: 'featured.cat3.item3', hasRightChevron: true }
                    ]}
                />

                {/* Category 4: Nasal Salt Sachet */}
                <CategorySection
                    titleKey="featured.cat4.title"
                    items={[
                        { image: '/images/product10.png', textKey: 'featured.cat4.item1' },
                        { image: '/images/product11.png', textKey: 'featured.cat4.item2' }
                    ]}
                />
            </div>
            <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)]"></div>
        </section>
    );
};

export default FeaturedProducts;
