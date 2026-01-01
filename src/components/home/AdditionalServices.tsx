'use client';

import React from 'react';

const AdditionalServices = () => {
    return (
        <section className="relative min-h-[400px] sm:min-h-[470px] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Headline 22 */}
                <h1 className="font-[var(--font-poppins)]  text-xl sm:text-2xl lg:text-[28px] text-[rgb(111,95,53)] text-center leading-[1.6] mt-8 sm:mt-10 lg:mt-[40px]">
                    Additional Services
                </h1>

                {/* Container cho 2 services */}
                <div className="flex flex-col sm:flex-row justify-center items-start gap-8 sm:gap-12 lg:gap-16 mt-8 sm:mt-10 lg:mt-12">
                    {/* Left Service - Lab Quality Test */}
                    <div className="flex flex-col items-center w-full sm:w-auto sm:max-w-[400px]">
                        {/* Shape 7 - Icon beaker */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[80px] lg:h-[80px] mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" preserveAspectRatio="none" fill="rgba(225, 162, 0, 1)">
                                <path d="M320-80q-83 0-141.5-58.5T120-280v-360q-33 0-56.5-23.5T40-720v-80q0-33 23.5-56.5T120-880h400q33 0 56.5 23.5T600-800v80q0 33-23.5 56.5T520-640v157q-28 21-48 50t-31 63H320v-60h140v-60H320v-60h140v-90H180v360q0 58.333 40.833 99.167Q261.667-140 320-140q42 0 75-21t50-56q6 16 14.5 30.5T479-158q-28 36-69 57t-90 21Zm0-170v-60h110q-1 15 .5 30t4.5 30H320ZM100-700h440v-120H100v120Zm0 0v-120 120Zm559.859 510Q706-190 738-221.859q32-31.859 32-78T738.141-378q-31.859-32-78-32T582-378.141q-32 31.859-32 78T581.859-222q31.859 32 78 32ZM864-54 757-161q-22 15-46.324 23-24.325 8-50.676 8-70.833 0-120.417-49.618Q490-229.235 490-300.118 490-371 539.618-420.5q49.617-49.5 120.5-49.5Q731-470 780.5-420.417 830-370.833 830-300q0 26.351-8 50.676Q814-225 799-203L906-96l-42 42Z"></path>
                            </svg>
                        </div>
                        {/* Headline 23 */}
                        <h3 className="font-[var(--font-poppins)] font-bold text-lg sm:text-xl lg:text-[20px] text-black text-center leading-[1.6]">
                            Lab Quality Test
                        </h3>
                        {/* Paragraph 8 */}
                        <p className="text-sm sm:text-base text-[rgb(34,34,34)] text-center leading-[1.6] mt-3 sm:mt-4 px-4">
                            Quality test provided at ease, for additional quality assurance.
                        </p>
                    </div>

                    {/* Right Service - ODM */}
                    <div className="flex flex-col items-center w-full sm:w-auto sm:max-w-[400px]">
                        {/* Shape 3 - Icon paintbrush */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[80px] lg:h-[80px] mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" preserveAspectRatio="none" fill="rgba(225, 162, 0, 1)">
                                <path d="M215-117q-33.835 0-66.917-11.5Q115-140 90-166q35-12 50-35t15-62q0-43.75 30.676-74.375Q216.353-368 260.176-368 304-368 334.5-337.375T365-263q0 64-43.5 105T215-117Zm0-60q35 0 62.5-25t27.5-61q0-20-12.5-32.5T260-308q-20 0-32.5 12.5T215-263q0 39-8.5 57.5T175-183q6 1 20 3.5t20 2.5Zm230-177-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Zm-185 91Z"></path>
                            </svg>
                        </div>
                        {/* Headline 24 */}
                        <h3 className="font-[var(--font-poppins)] font-bold text-lg sm:text-xl lg:text-[20px] text-black text-center leading-[1.6]">
                            ODM
                        </h3>
                        {/* Paragraph 9 */}
                        <p className="text-sm sm:text-base text-[rgb(34,34,34)] text-center leading-[1.6] mt-3 sm:mt-4 px-4">
                            We offer private labeling service to suit your business need.
                        </p>
                    </div>
                </div>

                {/* Vertical Separator - đường vàng kết nối xuống Team */}
                <div className="hidden sm:block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[80px] w-[2px] bg-[rgb(225,162,0)]"></div>
            </div>
        </section>
    );
};

export default AdditionalServices;