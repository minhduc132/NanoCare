'use client';

import React from 'react';
import { useT } from '../i18n/I18nProvider';

const MediaResources = () => {
    const t = useT();
    return (
        <section className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Title */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-xl sm:text-2xl lg:text-[28px] text-center leading-[1.6] mt-8 sm:mt-10 lg:mt-[40px] mb-6 sm:mb-8 lg:mb-12">
                    <span className="text-[rgb(111,95,53)]">{t('media.title.line1')}</span>{' '}
                    <span className="text-[rgb(225,162,0)]">{t('media.title.line2')}</span>
                </h1>

                {/* Cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-4 sm:gap-6">
                    {/* Card 1: Social Media Banners */}
                    <div className="flex flex-col w-full">
                        <div className="relative bg-white border border-gray-200 rounded-lg mb-3 sm:mb-4">
                            <div className="w-full h-[220px] sm:h-[180px] lg:h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/mediaResource.png)' }}></div>
                        </div>
                        <button className="w-full h-10 sm:h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-xs sm:text-sm lg:text-[14px] rounded hover:opacity-90 transition-opacity">
                            {t('media.download')}
                        </button>
                    </div>

                    {/* Card 2: Product Catalogue */}
                    <div className="flex flex-col w-full">
                        <div className="relative bg-white border border-gray-200 rounded-lg mb-3 sm:mb-4">
                            <div className="w-full h-[220px] sm:h-[180px] lg:h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/mediaResource2.png)' }}></div>
                        </div>
                        <button className="w-full h-10 sm:h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-xs sm:text-sm lg:text-[14px] rounded hover:opacity-90 transition-opacity">
                            {t('media.download')}
                        </button>
                    </div>

                    {/* Card 3: Video Media */}
                    <div className="flex flex-col w-full">
                        <div className="relative bg-white border border-gray-200 rounded-lg mb-3 sm:mb-4">
                            <div className="w-full h-[220px] sm:h-[180px] lg:h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/mediaResource3.png)' }}></div>
                        </div>
                        <button className="w-full h-10 sm:h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-xs sm:text-sm lg:text-[14px] rounded hover:opacity-90 transition-opacity">
                            {t('media.download')}
                        </button>
                    </div>

                    {/* Card 4: Market Report */}
                    <div className="flex flex-col w-full">
                        <div className="relative bg-white border border-gray-200 rounded-lg mb-3 sm:mb-4">
                            <div className="w-full h-[220px] sm:h-[180px] lg:h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/mediaResource.png)' }}></div>
                        </div>
                        <button className="w-full h-10 sm:h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-xs sm:text-sm lg:text-[14px] rounded hover:opacity-90 transition-opacity">
                            {t('media.download')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaResources;
