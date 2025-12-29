import React from 'react';

const About = () => {
    return (
        <section className="relative bg-white">
            <div className="mx-auto  px-4 py-16">
                {/* Image 7 */}
                <div className="absolute top-[30%] w-[460px] h-[460px] opacity-24">
                    <div className="w-full h-full bg-cover bg-left-top" style={{ backgroundImage: 'url(/images/nasal.png)' }}></div>
                </div>

                {/* Line 2 */}
                <div className="absolute top-[320px] left-1/2 transform -translate-x-1/2 h-[200px] w-[2px] bg-[rgb(225,162,0)]"></div>

                {/* Headline 6 */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[28px] text-[rgb(111,95,53)] text-center leading-[1.6] mb-6">
                    <span className="text-[rgb(225,162,0)]">Nanocare</span> focuses on producing a wide range of products
                    <br />
                    clean nasal passages, providing you with a sensation of
                    <br />
                    unrestricted breathing.
                </h1>

                {/* Paragraph 1 */}
                <p className="text-[16px] text-[rgb(34,34,34)] text-center leading-[1.6] cursor-pointer">
                    Explore Importance of nasal cleansing
                </p>

                {/* Line 1 */}
                <div className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 h-[140px] w-[2px] bg-[rgb(225,162,0)]"></div>
                {/* Image 3 */}
                <div className="relative w-[780px] h-[320px] mx-auto rounded-[16px] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute  inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/image.png)' }}>
                    </div>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>
                    {/* Text overlay - z-index cao hơn overlay để hiển thị trên */}
                    <div className="absolute bottom-0 left-0 right-0 z-20  px-6 py-4">
                        <p className="text-white text-[16px] leading-[1.6]">
                            Nasal cleansing is key to preventing infection and promoting public health.
                        </p>
                    </div>

                </div>
                <div className="relative w-[780px] h-[320px] mx-auto flex gap-[16px] mt-[16px]">

                    {/* Image 5 */}
                    <div className="relative w-1/2 h-full rounded-[16px] overflow-hidden">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url(/images/imagenn.png)' }}
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/30"></div>
                        {/* TEXT OVERLAY - z-index cao hơn overlay */}
                        <div className="absolute bottom-0 left-0 right-0 z-20  px-4 pt-4 pb-0">
                            <p className="text-[rgb(241,243,244)] text-[16px] leading-[1.6] pb-4">
                                Nasal cleansing eases cold symptoms and lowers healthcare strain.
                            </p>
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className="relative w-1/2 h-full rounded-[16px] overflow-hidden">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url(/images/imagem.png)' }}
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/30"></div>
                        {/* TEXT OVERLAY - z-index cao hơn overlay */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pt-4 pb-0">
                            <p className="text-[rgb(241,243,244)] text-[16px] leading-[1.6] pb-4">
                                Nasal cleansing fights infections by eliminating pathogens from the respiratory tract.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;


