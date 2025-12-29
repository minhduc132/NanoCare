import React from 'react';

const MediaResources = () => {
    return (
        <section className="relative min-h-[600px] bg-white">
            <div className="mx-auto max-w-[1200px] px-4 py-16">
                {/* Title */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[28px] text-center leading-[1.6] mt-[40px] mb-12">
                    <span className="text-[rgb(111,95,53)]">Nanocare's</span>{' '}
                    <span className="text-[rgb(225,162,0)]">media resource</span>
                </h1>

                {/* Cards Container */}
                <div className="flex justify-center items-start gap-6">
                    {/* Card 1: Social Media Banners */}
                    <div className="flex flex-col w-[280px]">
                        <div className="relative bg-white border border-gray-200 rounded-lg p-4 mb-4">
                            {/* Header */}
                            <div className="relative mb-4">
                                <div className="absolute top-0 right-0 text-[12px] text-gray-500">2023</div>
                                <h2 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[20px] text-black mb-2">
                                    Social Media Banners
                                </h2>
                                <p className="text-[12px] text-gray-600 mb-2">Free Download</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <div className="w-[16px] h-[16px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(225,162,0)">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <span className="text-[12px] text-[rgb(225,162,0)] font-medium">nano care</span>
                                </div>
                            </div>
                            {/* Visual */}
                            <div className="w-full h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/image (1).png)' }}></div>
                        </div>
                        <button className="w-full h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-[14px] rounded hover:opacity-90 transition-opacity">
                            Download
                        </button>
                    </div>

                    {/* Card 2: Product Catalogue */}
                    <div className="flex flex-col w-[280px]">
                        <div className="relative bg-white border border-gray-200 rounded-lg p-4 mb-4">
                            {/* Header */}
                            <div className="relative mb-4">
                                <div className="absolute top-0 right-0 text-[12px] text-gray-500">2023</div>
                                <h2 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[20px] text-black mb-2">
                                    Product Catalogue
                                </h2>
                                <p className="text-[12px] text-gray-600 mb-2">Free Download</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <div className="w-[16px] h-[16px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(225,162,0)">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <span className="text-[12px] text-[rgb(225,162,0)] font-medium">nano care</span>
                                </div>
                            </div>
                            {/* Visual */}
                            <div className="w-full h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/image (2).png)' }}></div>
                        </div>
                        <button className="w-full h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-[14px] rounded hover:opacity-90 transition-opacity">
                            Download
                        </button>
                    </div>

                    {/* Card 3: Video Media */}
                    <div className="flex flex-col w-[280px]">
                        <div className="relative bg-white border border-gray-200 rounded-lg p-4 mb-4">
                            {/* Header */}
                            <div className="relative mb-4">
                                <div className="absolute top-0 right-0 text-[12px] text-gray-500">2023</div>
                                <h2 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[20px] text-black mb-2">
                                    Video Media
                                </h2>
                                <p className="text-[12px] text-gray-600 mb-2">Free Download</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <div className="w-[16px] h-[16px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(225,162,0)">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <span className="text-[12px] text-[rgb(225,162,0)] font-medium">nano care</span>
                                </div>
                            </div>
                            {/* Visual */}
                            <div className="w-full h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/image (3).jpg)' }}></div>
                        </div>
                        <button className="w-full h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-[14px] rounded hover:opacity-90 transition-opacity">
                            Download
                        </button>
                    </div>

                    {/* Card 4: Market Report */}
                    <div className="flex flex-col w-[280px]">
                        <div className="relative bg-white border border-gray-200 rounded-lg p-4 mb-4">
                            {/* Header */}
                            <div className="relative mb-4">
                                <div className="absolute top-0 right-0 text-[12px] text-gray-500">2023</div>
                                <h2 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[20px] text-black mb-2">
                                    Market Report
                                </h2>
                                <p className="text-[12px] text-gray-600 mb-2">Free Download</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <div className="w-[16px] h-[16px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(225,162,0)">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <span className="text-[12px] text-[rgb(225,162,0)] font-medium">nano care</span>
                                </div>
                            </div>
                            {/* Visual */}
                            <div className="w-full h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/image (4).jpg)' }}></div>
                        </div>
                        <button className="w-full h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-[14px] rounded hover:opacity-90 transition-opacity">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaResources;
