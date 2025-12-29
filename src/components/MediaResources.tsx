import React from 'react';

const MediaResources = () => {
    return (
        <section className="relative  bg-white">
            <div className="mx-auto max-w-[1200px] px-4 ">
                {/* Title */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[28px] text-center leading-[1.6] mt-[40px] mb-12">
                    <span className="text-[rgb(111,95,53)]">Nanocare's</span>{' '}
                    <span className="text-[rgb(225,162,0)]">media resource</span>
                </h1>

                {/* Cards Container */}
                <div className="flex justify-center items-start gap-6">
                    {/* Card 1: Social Media Banners */}
                    <div className="flex flex-col w-[280px]">
                        <div className="relative bg-white border border-gray-200 rounded-lg mb-4">
                            {/* Visual */}
                            <div className="w-full h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/mediaResource.png)' }}></div>
                        </div>
                        <button className="w-full h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-[14px] rounded hover:opacity-90 transition-opacity">
                            Download
                        </button>
                    </div>

                    {/* Card 2: Product Catalogue */}
                    <div className="flex flex-col w-[280px]">
                        <div className="relative bg-white border border-gray-200 rounded-lg mb-4">
                            {/* Visual */}
                            <div className="w-full h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/mediaResource2.png)' }}></div>
                        </div>
                        <button className="w-full h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-[14px] rounded hover:opacity-90 transition-opacity">
                            Download
                        </button>
                    </div>

                    {/* Card 3: Video Media */}
                    <div className="flex flex-col w-[280px]">
                        <div className="relative bg-white border border-gray-200 rounded-lg mb-4">
                            {/* Visual */}
                            <div className="w-full h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/mediaResource3.png)' }}></div>
                        </div>
                        <button className="w-full h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-[14px] rounded hover:opacity-90 transition-opacity">
                            Download
                        </button>
                    </div>

                    {/* Card 4: Market Report */}
                    <div className="flex flex-col w-[280px]">
                        <div className="relative bg-white border border-gray-200 rounded-lg mb-4">
                            {/* Visual */}
                            <div className="w-full h-[200px] bg-cover bg-center rounded" style={{ backgroundImage: 'url(/images/mediaResource.png)' }}></div>
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
