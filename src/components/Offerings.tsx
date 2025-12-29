'use client';

import React from 'react';

const Offerings = () => {

    return (
        <section className="relative min-h-[400px] overflow-hidden mt-[10px]">
            {/* Background fixed - nằm im khi scroll */     }
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
                className="absolute inset-0 z-[1] py-16"
                style={{
                    // 0–30%: hơi mờ, 30–60%: chuyển dần, 60–100%: rất mờ
                    background: 'linear-gradient(to top, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.95) 100%)'
                }}
            ></div>
            
            
            {/* Content (tạm tắt hiệu ứng scroll/fade) */}
            <div 
                className="relative z-10 mx-auto max-w-[1200px] px-4 py-16"
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