import React from 'react';

const Partner = () => {
    return (
        <section className="relative min-h-[1600px] overflow-hidden">
            {/* Background với sky.png */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/images/sky.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            
            {/* Overlay gradient - đậm ở dưới, mờ dần lên trên */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white z-[1]"></div>

            <div className="relative z-10 mx-auto max-w-[100%] ">
                {/* Section 1: Become our Partner */}
                <div className=" pb-20">
                    {/* Title với vertical line */}
                    <div className="relative flex flex-col items-center mb-8">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)]"></div>
                        <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[28px] text-center leading-[1.6] mt-[150px]">
                            <span className="text-[rgb(34,34,34)]">Become our</span>{' '}
                            <span className="text-[rgb(225,162,0)]">Partner</span>
                        </h1>
                    </div>

                    {/* Paragraph */}
                    <p className="text-[16px] text-[rgb(34,34,34)] text-center leading-[1.6] max-w-[800px] mx-auto mb-12">
                        At Nanocare, we are proud to partner with leading healthcare providers and organizations around the world to bring innovative and effective nano-based solutions to patients. We believe that collaboration is essential to advancing healthcare and improving patient outcomes.
                    </p>

                    {/* Map Image */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-[900px] h-[400px] bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/sky1.png)' }}></div>
                    </div>
                </div>

                {/* Section 2: Partner's benefits */}
                <div className=" pb-20">
                    {/* Title */}
                    <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[28px] text-center leading-[1.6] mb-16">
                        <span className="text-[rgb(34,34,34)]">Partner's</span>{' '}
                        <span className="text-[rgb(225,162,0)]">benefits</span>
                    </h1>

                    {/* 3 Benefit Blocks */}
                    <div className="flex justify-center items-start gap-12 flex-wrap">
                        {/* Discount */}
                        <div className="flex flex-col items-center max-w-[320px]">
                            <div className="w-[60px] h-[60px] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" preserveAspectRatio="none" fill="rgba(225, 162, 0, 1)">
                                    <path d="m524-262 140-140q11-11 16-24.5t5-28.5q0-32-22.5-54.5T608-532q-20 0-40 13t-44 42q-24-29-44-42t-40-13q-32 0-54.5 22.5T363-455q0 15 5 28.5t16 24.5l140 140Zm35 165q-18 18-43.5 18T472-97L97-472q-10-10-13.5-21T80-516v-304q0-26 17-43t43-17h304q12 0 24 3.5t22 13.5l373 373q19 19 19 44.5T863-401L559-97Zm-41-41 304-304-378-378H140v304l378 378ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664ZM140-820Z"></path>
                                </svg>
                            </div>
                            <h3 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[18px] text-[rgb(34,34,34)] text-center leading-[1.6] mb-3">
                                Discount
                            </h3>
                            <p className="text-[16px] text-[rgb(34,34,34)] text-center leading-[1.6]">
                                Maximize your profits with exclusive discounts on premium nano products.
                            </p>
                        </div>

                        {/* Marketing & Advertising Support */}
                        <div className="flex flex-col items-center max-w-[320px]">
                            <div className="w-[60px] h-[60px] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" preserveAspectRatio="none" fill="rgba(225, 162, 0, 1)">
                                    <path d="M51-404q-26-43-38.5-86.5T0-576q0-110 77-187t187-77q63 0 119.5 26t96.5 71q40-45 96.5-71T696-840q110 0 187 77t77 187q0 42-12.5 85T909-405q-10-12-22.5-20.5T860-440q20-35 30-69t10-67q0-85-59.5-144.5T696-780q-55 0-108.5 32.5T480-649q-54-66-107.5-98.5T264-780q-85 0-144.5 59.5T60-576q0 33 10 67t30 69q-14 6-26.5 15T51-404ZM0-80v-53q0-39 42-63t108-24q13 0 24 .5t22 2.5q-8 17-12 34.5t-4 37.5v65H0Zm240 0v-65q0-65 66.5-105T480-290q108 0 174 40t66 105v65H240Zm540 0v-65q0-20-3.5-37.5T765-217q11-2 22-2.5t23-.5q67 0 108.5 24t41.5 63v53H780ZM480-230q-80 0-130 24t-50 61v5h360v-6q0-36-49.5-60T480-230Zm-330-20q-29 0-49.5-20.5T80-320q0-29 20.5-49.5T150-390q29 0 49.5 20.5T220-320q0 29-20.5 49.5T150-250Zm660 0q-29 0-49.5-20.5T740-320q0-29 20.5-49.5T810-390q29 0 49.5 20.5T880-320q0 29-20.5 49.5T810-250Zm-330-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-440q0 50-34.5 85T480-320Zm0-180q-25 0-42.5 17T420-440q0 25 17.5 42.5T480-380q26 0 43-17.5t17-42.5q0-26-17-43t-43-17Zm0 60Zm0 300Z"></path>
                                </svg>
                            </div>
                            <h3 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[18px] text-[rgb(34,34,34)] text-center leading-[1.6] mb-3">
                                Marketing & Advertising Support
                            </h3>
                            <p className="text-[16px] text-[rgb(34,34,34)] text-center leading-[1.6]">
                                Nanocare empowers partners with tailored promotions, visuals, and strategic guidance.
                            </p>
                        </div>

                        {/* Technical support */}
                        <div className="flex flex-col items-center max-w-[320px]">
                            <div className="w-[60px] h-[60px] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" preserveAspectRatio="none" fill="rgba(225, 162, 0, 1)">
                                    <path d="m187-551 106 45q18-36 38.5-71t43.5-67l-79-16-109 109Zm154 81 133 133q57-26 107-59t81-64q81-81 119-166t41-192q-107 3-192 41T464-658q-31 31-64 81t-59 107Zm229-96q-20-20-20-49.5t20-49.5q20-20 49.5-20t49.5 20q20 20 20 49.5T669-566q-20 20-49.5 20T570-566Zm-15 383 109-109-16-79q-32 23-67 43.5T510-289l45 106Zm326-694q9 136-34 248T705-418l-2 2-2 2 22 110q3 15-1.5 29T706-250L535-78l-85-198-170-170-198-85 172-171q11-11 25-15.5t29-1.5l110 22q1-1 2-1.5t2-1.5q99-99 211-142.5T881-877ZM149-325q35-35 85.5-35.5T320-326q35 35 34.5 85.5T319-155q-26 26-80.5 43T75-80q15-109 31.5-164t42.5-81Zm42 43q-14 15-25 47t-19 82q50-8 82-19t47-25q19-17 19.5-42.5T278-284q-19-18-44.5-17.5T191-282Z"></path>
                                </svg>
                            </div>
                            <h3 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[18px] text-[rgb(34,34,34)] text-center leading-[1.6] mb-3">
                                Technical support
                            </h3>
                            <p className="text-[16px] text-[rgb(34,34,34)] text-center leading-[1.6]">
                                Equips distributors with comprehensive training and support for excellence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: Product Display */}
                <div className="pt-12 pb-8">
                    <div className="w-full h-[700px] bg-cover" style={{ backgroundImage: 'url(/images/product.png)', backgroundPosition: 'center 80%' }}></div>
                </div>
            </div>
        </section>
    );
};

export default Partner;
