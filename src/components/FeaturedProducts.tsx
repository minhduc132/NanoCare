import React from 'react';

const FeaturedProducts = () => {
    return (
        <section className="relative min-h-[1600px] font-[TWFucmwZSFeHRyYUxpZhLnRZg] bg-white" >
            <div className="mx-auto max-w-[1200px] px-4 ">
                {/* Featured Products Title - Top Left */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[28px] text-left mb-12">
                    <span className="text-[rgb(111,95,53)]">Featured</span>{' '}
                    <span className="text-[rgb(225,162,0)]">Products</span>
                </h1>

                {/* Category 1: Nasal Rinse Bottle */}
                <div className="flex gap-8 mb-16 items-start">
                    <div className="w-[240px] flex-shrink-0">
                        <div className="flex items-center gap-2">
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
                    <div className="flex-1">
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                            <div className="min-w-[280px] flex flex-col relative">
                                <div className="h-[300px] rounded-lg overflow-hidden relative">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product1.png)' }}></div>
                                    {/* Chevron Left Icon */}
                                    <div className="absolute left-[10px] top-1/2 transform -translate-y-1/2 z-10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke="rgb(225,162,0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">Nasal Wash Squeeze Bottle<br />180ml</p>
                            </div>
                            <div className="min-w-[280px] flex flex-col">
                                <div className="h-[300px] rounded-lg overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product2.png)' }}></div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">Nasal Wash Squeeze Bottle<br />250ml</p>
                            </div>
                            <div className="min-w-[280px] flex flex-col relative">
                                <div className="h-[300px] rounded-lg overflow-hidden relative">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product3.png)' }}></div>
                                    {/* Chevron Right Icon */}
                                    <div className="absolute right-[10px] top-1/2 transform -translate-y-1/2 z-10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke="rgb(225,162,0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">Nasal Wash Squeeze Bottle<br />300ml</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category 2: Nasal Rinse Kit for Kid */}
                <div className="flex gap-8 mb-16 items-start">
                    <div className="w-[240px] flex-shrink-0">
                        <div className="flex items-center gap-2">
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
                    <div className="flex-1">
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                            <div className="min-w-[280px] flex flex-col relative">
                                <div className="h-[300px] rounded-lg overflow-hidden relative">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product4.jpg)' }}></div>
                                    {/* Chevron Left Icon */}
                                    <div className="absolute left-[10px] top-1/2 transform -translate-y-1/2 z-10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke="rgb(225,162,0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">Nasal Rinse Kit for Kids<br />200ml</p>
                            </div>
                            <div className="min-w-[280px] flex flex-col">
                                <div className="h-[300px] rounded-lg overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product5.png)' }}></div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">Nasal Aspirator</p>
                            </div>
                            <div className="min-w-[280px] flex flex-col relative">
                                <div className="h-[300px] rounded-lg overflow-hidden relative">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product6.png)' }}></div>
                                    {/* Chevron Right Icon */}
                                    <div className="absolute right-[10px] top-1/2 transform -translate-y-1/2 z-10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke="rgb(225,162,0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">BUBEN Nasal Aspirator</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category 3: Nasal Salt Water */}
                <div className="flex gap-8 mb-16 items-start">
                    <div className="w-[240px] flex-shrink-0">
                        <div className="flex items-center gap-2">
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
                    <div className="flex-1">
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                            <div className="min-w-[280px] flex flex-col relative">
                                <div className="h-[300px] rounded-lg overflow-hidden relative">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product7.png)' }}></div>
                                    {/* Chevron Left Icon */}
                                    <div className="absolute left-[10px] top-1/2 transform -translate-y-1/2 z-10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke="rgb(225,162,0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">ANSO Saline Nasal Spray</p>
                            </div>
                            <div className="min-w-[280px] flex flex-col">
                                <div className="h-[300px] rounded-lg overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product8.png)' }}></div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">Nanocare Saline Nasal Spray</p>
                            </div>
                            <div className="min-w-[280px] flex flex-col relative">
                                <div className="h-[300px] rounded-lg overflow-hidden relative">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product9.png)' }}></div>
                                    {/* Chevron Right Icon */}
                                    <div className="absolute right-[10px] top-1/2 transform -translate-y-1/2 z-10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke="rgb(225,162,0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">ANSO Saline Nasal Spray</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category 4: Nasal Salt Sachet */}
                <div className="flex gap-8 mb-16 items-start">
                    <div className="w-[240px] flex-shrink-0">
                        <div className="flex items-center gap-2">
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
                    <div className="flex-1">
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                            <div className="min-w-[280px] flex flex-col">
                                <div className="h-[300px] rounded-lg overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product10.png)' }}></div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">Nasal Salt (Blue)</p>
                            </div>
                            <div className="min-w-[280px] flex flex-col">
                                <div className="h-[300px] rounded-lg overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/product11.png)' }}></div>
                                </div>
                                <p className="text-[16px] text-[rgb(34,34,34)] text-base leading-[1.6] text-[rgb(34,34,34)] mt-2">Nasal Salt (Yellow)</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)]"></div>

        </section>
    );
};

export default FeaturedProducts;