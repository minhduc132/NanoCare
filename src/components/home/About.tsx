'use client';

import React from 'react';

const About = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative max-w-7xl">
                {/* Line 2 */}
                <div className="hidden md:block absolute top-[280px] left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)] z-10"></div>

                {/* Headline 6 */}
                <h1 className="relative z-10 text-xl sm:text-2xl lg:text-[28px] text-[rgb(111,95,53)] text-center leading-[1.6] mb-4 sm:mb-6 px-4">
                    <span className="text-[rgb(225,162,0)]">Nanocare</span>{' '}
                    focuses on producing a wide range of products that<br />
                    clean nasal passages, providing you with a sensation of<br />
                    unrestricted breathing.
                </h1>

                {/* Paragraph 1 */}
                <p className="relative font-[var(--font-poppins)] z-10 text-sm sm:text-base text-[rgb(34,34,34)] text-center leading-[1.6] cursor-pointer pb-8 sm:pb-12 lg:pb-24">
                    Explore Importance of nasal cleansing
                </p>

                {/* Line 1 */}
                <div className="hidden md:block absolute top-[-70px] left-1/2 transform -translate-x-1/2 h-[140px] w-[2px] bg-[rgb(225,162,0)] z-10"></div>

                {/* Container for images and background */}
                <div className="relative w-full max-w-4xl mx-auto">

                    {/* Image 7 - Background decorative - hidden on mobile, visible on large screens */}
                    <div className="hidden lg:block absolute left-[-280px] top-[25%] w-[460px] h-[460px] opacity-24 hover:opacity-100 transition-opacity duration-300 z-0">
                        <div
                            className="w-full h-full bg-cover bg-left-top"
                            style={{ backgroundImage: 'url(/images/nasal.png)' }}
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="relative z-10 w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] rounded-lg sm:rounded-[16px] overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/image.png)' }}>
                        </div>
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/30"></div>
                        {/* Text overlay - z-index cao hơn overlay để hiển thị trên */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 py-3 sm:py-4">
                            <p className="text-white text-sm sm:text-base leading-[1.6]">
                                Nasal cleansing is key to preventing infection and promoting public health.
                            </p>
                        </div>
                    </div>

                    {/* Two images container */}
                    <div className="relative z-10 w-full flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-[16px] mt-3 sm:mt-4">
                        {/* Image 5 */}
                        <div className="relative w-full sm:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] rounded-lg sm:rounded-[16px] overflow-hidden">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: 'url(/images/imagenn.png)' }}
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/30"></div>
                            {/* TEXT OVERLAY - z-index cao hơn overlay */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 px-3 sm:px-4 pt-3 sm:pt-4 pb-0">
                                <p className="text-[rgb(241,243,244)] text-sm sm:text-base leading-[1.6] pb-3 sm:pb-4">
                                    Nasal cleansing eases cold symptoms and lowers healthcare strain.
                                </p>
                            </div>
                        </div>

                        {/* Image 4 */}
                        <div className="relative w-full sm:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] rounded-lg sm:rounded-[16px] overflow-hidden">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: 'url(/images/imagem.png)' }}
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/30"></div>
                            {/* TEXT OVERLAY - z-index cao hơn overlay */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 px-3 sm:px-4 pt-3 sm:pt-4 pb-0">
                                <p className="text-[rgb(241,243,244)] text-sm sm:text-base leading-[1.6] pb-3 sm:pb-4">
                                    Nasal cleansing fights infections by eliminating pathogens from the respiratory tract.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;


