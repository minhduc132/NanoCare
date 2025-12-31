'use client';

import React, { useState, useEffect, useRef } from 'react';

const Team = () => {
    const [contentOpacity, setContentOpacity] = useState(0);
    const [overlayOpacity, setOverlayOpacity] = useState(0.85);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const sectionTop = rect.top;
                const sectionHeight = rect.height;
                
                let opacity = 0;
                if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
                    const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight * 0.6)));
                    opacity = progress;
                }
                
                const overlay = Math.max(0.6, 0.85 - (opacity * 0.15)); // Overlay luôn đủ tối
                
                setContentOpacity(opacity);
                setOverlayOpacity(overlay);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[810px] overflow-hidden">
            {/* Background fixed với blur */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: 'url(/images/tem_background.png)',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)',
                    transform: 'scale(1.1)',
                    willChange: 'transform'
                }}
            ></div>
            {/* Overlay làm mờ background - màu vàng */}
            <div 
                className="absolute inset-0 transition-opacity duration-300"
                style={{ 
                    backgroundColor: 'rgb(112, 95, 53)',
                    opacity: overlayOpacity
                }}
            ></div>
            {/* Content với fade in effect */}
            <div 
                className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 transition-opacity duration-500 flex flex-col justify-center min-h-[600px] sm:min-h-[700px] lg:min-h-[810px]"
                style={{ 
                    opacity: contentOpacity,
                    transform: 'translateZ(0)'
                }}
            >
                {/* Line vàng từ trên xuống */}
                <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)]"></div>

                {/* Headline 13 */}
                <h1 className="font-[var(--font-hind)] text-xl sm:text-2xl lg:text-[28px] text-white text-center leading-[1.6] px-4">
                    The team behind <span className="text-[rgb(225,162,0)]">Nanocare</span>
                </h1>

                {/* Paragraph 7 */}
                <p className="text-sm sm:text-base text-white text-center leading-[1.6] mt-3 sm:mt-4 px-4 max-w-4xl mx-auto">
                    The Nanocare team, comprising scientists, engineers, and researchers, is<br />
                    dedicated to maximizing resources for nano-technology development.
                </p>

                {/* Cards container */}
                <div className="flex flex-col sm:flex-row justify-center items-start gap-6 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 px-4">
                    {/* Group 10 - Export Manager */}
                    <div className="w-full sm:w-[280px] lg:w-[320px] xl:w-[380px] flex flex-col items-center">
                        <div 
                            className="w-full h-[250px] sm:h-[280px] lg:h-[320px] xl:h-[380px] bg-cover bg-center rounded-lg sm:rounded-[16px] shadow-xl"
                            style={{ 
                                backgroundImage: 'url(/images/avatar1.png)',
                                backgroundColor: '#e5e7eb',
                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                            }}
                        ></div>
                        <h3 className="font-[var(--font-hind)] text-sm sm:text-base text-white text-center leading-[1.6] mt-3 sm:mt-4">
                            Export Manager
                        </h3>
                        <h3 className="font-[var(--font-hind)] text-sm sm:text-base text-white text-center leading-[1.6]">
                            Ms. Richy (Thuy)
                        </h3>
                    </div>

                    {/* Group 11 - Brand Manager */}
                    <div className="w-full sm:w-[280px] lg:w-[320px] xl:w-[380px] flex flex-col items-center relative">
                        <div 
                            className="w-full h-[250px] sm:h-[280px] lg:h-[320px] xl:h-[380px] bg-cover bg-center rounded-lg sm:rounded-[16px] shadow-xl"
                            style={{ 
                                backgroundImage: 'url(/images/avatar.jpg)',
                                backgroundColor: '#e5e7eb',
                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                            }}
                        ></div>
                        <h3 className="font-[var(--font-hind)] text-sm sm:text-base text-white text-center leading-[1.6] mt-3 sm:mt-4">
                            Brand Manager
                        </h3>
                        <h3 className="font-[var(--font-hind)] text-sm sm:text-base text-white text-center leading-[1.6]">
                            Ms. Lion Rose
                        </h3>
                        {/* Line vàng dưới chữ Ms. Lion Rose */}
                        <div className="hidden sm:block absolute top-full left-1/2 transform -translate-x-1/2 h-[120px] w-[1px] bg-[rgb(225,162,0)] mt-2"></div>
                    </div>

                    {/* Group 12 - Production Manager */}
                    <div className="w-full sm:w-[280px] lg:w-[320px] xl:w-[380px] flex flex-col items-center">
                        <div 
                            className="w-full h-[250px] sm:h-[280px] lg:h-[320px] xl:h-[380px] bg-cover bg-center rounded-lg sm:rounded-[16px] shadow-xl"
                            style={{ 
                                backgroundImage: 'url(/images/avatar3.jpg)',
                                backgroundColor: '#e5e7eb',
                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                            }}
                        ></div>
                        <h3 className="font-[var(--font-hind)] text-sm sm:text-base text-white text-center leading-[1.6] mt-3 sm:mt-4">
                            Production Manager
                        </h3>
                        <h3 className="font-[var(--font-hind)] text-sm sm:text-base text-white text-center leading-[1.6]">
                            Mr. Ha
                        </h3>
                    </div>
                </div>
                
                {/* Line vàng từ dưới card giữa xuống Certificates */}
                <div className="hidden sm:block absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)]"></div>
            </div>
        </section>
    );
};

export default Team;