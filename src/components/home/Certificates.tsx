'use client';

import React from 'react';

const Certificates = () => {
    return (
        <section className="relative min-h-[400px] sm:min-h-[550px] bg-white">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Line 3 - đường vàng từ banner xuống */}
                <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)]"></div>

                {/* Headline 21 */}
                <h1 className="font-[var(--font-hind)] text-xl sm:text-2xl lg:text-[28px] text-[rgb(111,95,53)] text-center leading-[1.6] mt-8 sm:mt-12 lg:mt-[60px]">
                    Certificates
                </h1>

                {/* Container cho 6 ảnh certificates */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-12">
                    <div className="w-full h-[180px] sm:h-[220px] lg:h-[260px] flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/certificates.png)' }}></div>
                    <div className="w-full h-[180px] sm:h-[220px] lg:h-[260px] flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/certificates2.png)' }}></div>
                    <div className="w-full h-[180px] sm:h-[220px] lg:h-[260px] flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/certificates3.png)' }}></div>
                    <div className="w-full h-[180px] sm:h-[220px] lg:h-[260px] flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/certificates4.png)' }}></div>
                    <div className="w-full h-[180px] sm:h-[220px] lg:h-[260px] flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/certificates5.png)' }}></div>
                    <div className="w-full h-[180px] sm:h-[220px] lg:h-[260px] flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/certificates6.png)' }}></div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;