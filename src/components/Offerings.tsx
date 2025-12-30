'use client';

import React, { useState, useEffect } from 'react';
import { useT } from '../i18n/I18nProvider';

const Offerings = () => {                                       
    const t = useT();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640); // sm breakpoint
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
                {/* Two-column layout: Title on left, Products on right */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                    {/* Left Column - Title */}
                    <div className="w-full lg:w-1/3 flex-shrink-0">
                        <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] text-xl sm:text-2xl lg:text-[28px] leading-[1.2]">
                            <span className="text-[rgb(225,162,0)]">{t('offerings.title.highlight')}</span>{' '}
                            <span className="text-[rgb(111,95,53)]">{t('offerings.title.rest')}</span>
                        </h1>
                    </div>

                    {/* Right Column - Three Product Frames */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-4">
                        {/* Frame 1 - Saline Solutions */}
                        <div className="relative bg-white border-2 border-[rgb(225,162,0)] rounded-lg sm:rounded-[16px] overflow-hidden">
                            <div className="w-full h-full min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] p-[10px]">
                                <div 
                                    className="w-full h-full bg-cover bg-left relative rounded overflow-hidden" 
                                    style={{ 
                                        backgroundImage: 'url(/images/offering.png)',
                                        ...(isMobile ? {} : { backgroundPosition: '90% center' })
                                    }}
                                >
                                    <h3 
                                        className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4 font-bold text-[18px] leading-[1.6] text-[rgb(34,34,34)] text-left z-10"
                                    >
                                        {t('offerings.card1.title')}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Frame 2 - Nasal Rinse Kit */}
                        <div className="relative bg-white border-2 border-[rgb(225,162,0)] rounded-lg sm:rounded-[16px] overflow-hidden">
                            <div className="w-full h-full min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] p-[10px]">
                                <div 
                                    className="w-full h-full bg-cover bg-left relative rounded overflow-hidden" 
                                    style={{ 
                                        backgroundImage: 'url(/images/offering2.png)',
                                        ...(isMobile ? {} : { backgroundPosition: '90% center' })
                                    }}
                                >
                                    <h3 
                                        className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4 font-bold text-[18px] leading-[1.6] text-[rgb(34,34,34)] text-left z-10"
                                    >
                                        {t('offerings.card2.title')}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Frame 3 - Salt */}
                        <div className="relative bg-white border-2 border-[rgb(225,162,0)] rounded-lg sm:rounded-[16px] overflow-hidden">
                            <div className="w-full h-full min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] p-[10px]">
                                <div 
                                    className="w-full h-full bg-cover bg-left relative rounded overflow-hidden" 
                                    style={{ 
                                        backgroundImage: 'url(/images/offering1.png)',
                                        ...(isMobile ? {} : { backgroundPosition: '90% center' })
                                    }}
                                >
                                    <h3 
                                        className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4 font-bold text-[18px] leading-[1.6] text-[rgb(34,34,34)] text-left z-10"
                                    >
                                        {t('offerings.card3.title')}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;