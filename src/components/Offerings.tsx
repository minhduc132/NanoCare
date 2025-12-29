'use client';

import React from 'react';
import { useT } from '../i18n/I18nProvider';

const Offerings = () => {
    const t = useT();

    return (
        <section className="relative min-h-[400px] overflow-hidden mt-2 sm:mt-[10px]">
            {/* Background fixed - nằm im khi scroll */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: 'url(/images/sessction3.png)',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center'
                }}
            ></div>
             
            {/* Gradient overlay - bottom hơi mờ, top mờ mạnh */}
            <div 
                className="absolute inset-0 z-[1] py-8 sm:py-12 lg:py-16"
                style={{
                    background: 'linear-gradient(to top, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.95) 100%)'
                }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Headline 10 */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] text-xl sm:text-2xl lg:text-[28px] leading-[1.2] mb-6 sm:mb-8 lg:mb-12">
                    <span className="text-[rgb(225,162,0)]">{t('offerings.title.highlight')}</span>{' '}
                    <span className="text-[rgb(111,95,53)]">{t('offerings.title.rest')}</span>
                </h1>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Card 1 - Saline Solutions */}
                    <div className="relative group">
                        <div className="w-full h-[180px] sm:h-[200px] lg:h-[200px] bg-white border-2 border-[rgb(225,162,0)] rounded-lg sm:rounded-[16px] overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center rounded-lg sm:rounded-[16px]" style={{ backgroundImage: 'url(/images/offering.png)' }}></div>
                        </div>
                        <h3 className="mt-3 sm:mt-4 font-bold text-base sm:text-lg text-white text-left leading-[1.6]">
                            {t('offerings.card1.title')}
                        </h3>
                    </div>

                    {/* Card 2 - Nasal Rinse Kit */}
                    <div className="relative group">
                        <div className="w-full h-[180px] sm:h-[200px] lg:h-[200px] bg-white border-2 border-[rgb(225,162,0)] rounded-lg sm:rounded-[16px] overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center rounded-lg sm:rounded-[16px]" style={{ backgroundImage: 'url(/images/offering2.png)' }}></div>
                        </div>
                        <h3 className="mt-3 sm:mt-4 font-bold text-base sm:text-lg text-white text-left leading-[1.6]">
                            {t('offerings.card2.title')}
                        </h3>
                    </div>

                    {/* Card 3 - Salt */}
                    <div className="relative group sm:col-span-2 lg:col-span-1">
                        <div className="w-full h-[180px] sm:h-[200px] lg:h-[200px] bg-white border-2 border-[rgb(225,162,0)] rounded-lg sm:rounded-[16px] overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center rounded-lg sm:rounded-[16px]" style={{ backgroundImage: 'url(/images/offering1.png)' }}></div>
                        </div>
                        <h3 className="mt-3 sm:mt-4 font-bold text-base sm:text-lg text-white text-left leading-[1.6]">
                            {t('offerings.card3.title')}
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;