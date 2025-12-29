import React from 'react';

const FeaturedProducts = () => {
    return (
        <section className="relative min-h-[1600px] bg-white">
            <div className="mx-auto max-w-[1200px] px-4 ">
                {/* Featured Products Title - Top Left */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[28px] text-left mb-12">
                    <span className="text-[rgb(111,95,53)]">Featured</span>{' '}
                    <span className="text-[rgb(225,162,0)]">Products</span>
                </h1>

                <div className="flex gap-8">
                    {/* Left Side - Categories */}
                    <div className="w-[240px] flex-shrink-0">
                        <div className="mb-16 min-w-[280px] h-[340px]">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex flex-row gap-1">
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                </div>
                                <h2 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[20px] text-[rgb(111,95,53)]">
                                    Nasal Rinse Bottle
                                </h2>
                            </div>
                        </div>
                        <div className="mb-16  min-w-[280px] h-[340px]">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex flex-row gap-1">
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                </div>
                                <h2 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[20px] text-[rgb(111,95,53)]">
                                    Nasal Rinse Kit for Kid
                                </h2>
                            </div>
                        </div>
                        <div className="mb-16  min-w-[280px] h-[330px]">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex flex-row gap-1">
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                </div>
                                <h2 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[20px] text-[rgb(111,95,53)]">
                                    Nasal Salt Water
                                </h2>
                            </div>
                        </div>
                        <div className="mb-16  min-w-[280px]">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex flex-row gap-1">
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                    <div className="w-[2px] h-[16px] bg-[rgb(225,162,0)]"></div>
                                </div>
                                <h2 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[20px] text-[rgb(111,95,53)]">
                                    Nasal Salt Sachet
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Products */}
                    <div className="flex-1">
                        {/* Category 1: Nasal Rinse Bottle */}
                        <div className="mb-16">
                            <div className="relative">
                                <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                                    <div className="min-w-[280px] flex flex-col">
                                        <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/nasal.png)' }}></div>
                                        </div>
                                        <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">Nasal Wash Squeeze Bottle<br />180ml</p>
                                    </div>
                                    <div className="min-w-[280px] flex flex-col">
                                        <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/offering.png)' }}></div>
                                        </div>
                                        <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">Nasal Wash Squeeze Bottle<br />250ml</p>
                                    </div>
                                    <div className="min-w-[280px] flex flex-col">
                                        <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/offering1.png)' }}></div>
                                        </div>
                                        <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">Nasal Wash Squeeze Bottle<br />300ml</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Category 2: Nasal Rinse Kit for Kid */}
                        <div className="mb-16">
                            <div className="relative">
                                <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                                    <div className="min-w-[280px] flex flex-col">
                                        <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/offering2.png)' }}></div>
                                        </div>
                                        <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">Nasal Rinse Kit for Kids<br />200ml</p>
                                    </div>
                                    <div className="min-w-[280px] flex flex-col">
                                        <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/image (25).png)' }}></div>
                                        </div>
                                        <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">Nasal Aspirator</p>
                                    </div>
                                    <div className="min-w-[280px] flex flex-col">
                                        <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/image (26).png)' }}></div>
                                        </div>
                                        <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">BUBEN Nasal Aspirator</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Category 3: Nasal Salt Water */}
                        <div className="mb-16">
                            <div className="relative">
                                <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                                    <div className="min-w-[280px] flex flex-col">
                                        <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/image (27).png)' }}></div>
                                        </div>
                                        <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">ANSO Saline Nasal Spray</p>
                                    </div>
                                    <div className="min-w-[280px] flex flex-col">
                                        <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/image (28).png)' }}></div>
                                        </div>
                                        <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">Nanocare Saline Nasal Spray</p>
                                    </div>
                                    <div className="min-w-[280px] flex flex-col">
                                        <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/image (29).png)' }}></div>
                                        </div>
                                        <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">ANSO Saline Nasal Spray</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Category 4: Nasal Salt Sachet */}
                        <div className="mb-16">
                            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                                <div className="min-w-[280px] flex flex-col">
                                    <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                        <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/image (30).png)' }}></div>
                                    </div>
                                    <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">Nasal Salt (Blue)</p>
                                </div>
                                <div className="min-w-[280px] flex flex-col">
                                    <div className="h-[280px] bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }}>
                                        <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/image (32).png)' }}></div>
                                    </div>
                                    <p className="text-[16px] text-[rgb(34,34,34)] text-center mt-2">Nasal Salt (Yellow)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;