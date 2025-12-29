'use client';

import React from 'react';


const Hero = () => {

    return (
        <section className="relative min-h-[500px] md:min-h-[760px] bg-white w-full">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                preload="auto"
                controlsList="nodownload"
                loop
                autoPlay
                playsInline
                webkit-playsinline
                muted
                poster="#"
            >
                <source src="https://s.ladicdn.com/5ac35791e9cb7e9e174378a0/hero-section-20231117074145-97jji.mp4" type="video/mp4" />
            </video>

            {/* Header Bar */}
            <div className="absolute top-0 w-full h-[60px] md:h-[80px] bg-[rgba(96,91,79,0.8)] z-20 flex items-center justify-center">
                {/* Logo */}
                <div className="z-30">
                    <div className="w-[80px] h-[32px] md:w-[101px] md:h-[40px]">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://w.ladicdn.com/5ac35791e9cb7e9e174378a0/nanocare_logo_white-20231116015501-kvxeh.svg)' }}></div>
                    </div>
                </div>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(21,16,2,0.5)] opacity-40"></div>
            {/* Container */}
            <div className="relative z-10 mx-auto max-w-[1200px] h-full px-4 flex flex-col items-center justify-center min-h-[500px] md:min-h-[760px]">
                {/* Title */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[24px] md:text-[32px] lg:text-[40px] text-[rgb(241,243,244)] text-center leading-[1.6] z-30 mb-6 md:mb-8 px-4">
                World's #1 nasal irrigation device manufacturer
                </h1>

                {/* Button */}
                <button className="w-[160px] md:w-[180px] h-[36px] md:h-[40px] bg-[rgb(225,162,0)] text-[rgb(241,243,244)] font-bold text-[12px] md:text-[14px] text-center leading-[1.6] rounded-none border-none cursor-pointer active:translate-y-[2px] transition-transform duration-200">
                Explore more
                </button>
            </div>
        </section>
    );
};

export default Hero;
