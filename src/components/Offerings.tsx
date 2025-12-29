'use client';

import React, { useState, useEffect, useRef } from 'react';

const Offerings = () => {
    const [contentOpacity, setContentOpacity] = useState(0);
    const [revealProgress, setRevealProgress] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const sectionTop = rect.top;
                const sectionHeight = rect.height;
                
                // Tính toán opacity cho content
                let opacity = 0;
                if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
                    const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight * 0.6)));
                    opacity = progress;
                }
                
                // Tính toán reveal progress - overlay chạy từ trên xuống
                // Khi section vào viewport, reveal từ 0 (ẩn) đến 1 (hiện hết)
                let reveal = 0;
                if (sectionTop < windowHeight) {
                    // Tính progress dựa trên vị trí scroll
                    // Khi sectionTop < 0 (đã scroll qua đầu section), reveal tăng dần
                    if (sectionTop <= 0) {
                        // Section đã scroll qua, tính reveal dựa trên phần còn lại
                        const scrollProgress = Math.min(1, Math.abs(sectionTop) / sectionHeight);
                        reveal = scrollProgress;
                    } else {
                        // Section đang ở trên viewport, reveal = 0
                        reveal = 0;
                    }
                }
                
                setContentOpacity(opacity);
                setRevealProgress(reveal);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[400px] overflow-hidden">
            {/* Background fixed - nằm im khi scroll */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: 'url(/images/sessction3.png)',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)',
                    transform: 'scale(1.1)',
                    willChange: 'transform'
                }}
            ></div>
            
            {/* Gradient overlay - mờ từ trên xuống (giống Partner) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 z-[1]"></div>
            
            {/* Reveal overlay - chạy từ trên xuống khi scroll */}
            <div 
                className="absolute inset-0 bg-white transition-all duration-300 z-[2]"
                style={{ 
                    clipPath: `inset(${revealProgress * 100}% 0 0 0)`,
                    WebkitClipPath: `inset(${revealProgress * 100}% 0 0 0)`
                }}
            ></div>
            {/* Content với fade in effect */}
            <div 
                className="relative z-10 mx-auto max-w-[1200px] px-4 py-16 transition-opacity duration-500"
                style={{ 
                    opacity: contentOpacity,
                    transform: 'translateZ(0)'
                }}
            >
                {/* Box 12 */}
                <div className="absolute inset-0"></div>

                {/* Headline 10 */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[28px] text-[rgb(225,162,0)] text-left leading-[1.6] mt-[100px] ml-10">
                    Nanocare Offering<br />
                </h1>

                {/* Box 15 */}
                <div className="absolute top-[100px] left-[610px] w-[280px] h-[200px] bg-white border-2 border-[rgb(225,162,0)] rounded-[16px]">
                    <div className="w-full h-full bg-cover bg-[100%_100%] bg-no-repeat bg-scroll rounded-[16px]" style={{ backgroundImage: 'url(/images/offering2.png)' }}></div>
                </div>

                {/* Headline 12 */}
                <h3 className="absolute top-[220px] left-[630px] font-bold text-[18px] text-white text-left leading-[1.6]">
                    Nasal<br />Rinse Kit
                </h3>

                {/* Box 14 */}
                <div className=" absolute top-[100px] left-[310px] w-[280px] h-[200px] bg-white border-2 border-[rgb(225,162,0)] rounded-[16px]">
                    <div className="w-full h-full bg-cover bg-[100%_100%] bg-repeat bg-scroll rounded-[16px]" style={{ backgroundImage: 'url(/images/offering.png)' }}></div>
                </div>

                {/* Headline 11 */}
                <h3 className="absolute top-[220px] left-[330px] font-bold text-[18px] text-white text-left leading-[1.6]">
                    Saline<br />Solutions
                </h3>

                {/* Box 115 */}
                <div className="absolute top-[100px] left-[910px] w-[280px] h-[200px] bg-white border-2 border-[rgb(225,162,0)] rounded-[16px]">
                    <div className="w-full h-full bg-cover bg-[100%_100%] bg-no-repeat bg-scroll rounded-[16px]" style={{ backgroundImage: 'url(/images/offering1.png)' }}></div>
                </div>

                {/* Headline 61 */}
                <h3 className="absolute top-[250px] left-[930px] font-bold text-[18px] text-white text-left leading-[1.6]">
                    Salt
                </h3>
            </div>
        </section>
    );
};

export default Offerings;