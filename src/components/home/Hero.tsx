'use client';

import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[500px] md:min-h-[760px] bg-white w-full pt-[60px] md:pt-[80px]">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                preload="metadata"
                controlsList="nodownload"
                loop
                autoPlay
                playsInline
                muted
                aria-label="Hero background video"
            >
                <source src="https://s.ladicdn.com/5ac35791e9cb7e9e174378a0/hero-section-20231117074145-97jji.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(21,16,2,0.5)] opacity-40"></div>
            {/* Container */}
            <div className="relative z-10 mx-auto max-w-[1200px] h-full px-4 flex flex-col items-center justify-center min-h-[500px] md:min-h-[760px]">
                {/* Title */}
                <h1 className="font-[var(--font-poppins)] text-[24px] md:text-[32px] lg:text-[40px] text-[rgb(241,243,244)] text-center leading-[1.6] z-30 mb-6 md:mb-8 px-4">
                    World's #1 nasal irrigation device manufacturer
                </h1>

                {/* Button */}
                <button className="w-[160px] md:w-[180px] h-[36px] md:h-[40px] bg-[rgb(225,162,0)] text-[rgb(241,243,244)] font-bold text-[12px] md:text-[14px] text-center leading-[1.6] rounded-none border-none cursor-pointer active:translate-y-[2px] transition-transform duration-200">
                    Explore more
                </button>
            </div>
            <div className="hidden sm:block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)]"></div>
        </section>
    );
};

export default Hero;
