'use client';

import React from 'react';

const Contact = () => {
    return (
        <section className="relative min-h-[800px] bg-white font-[var(--font-hind)]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Title */}
                <h1 className="font-[var(--font-hind)] text-xl sm:text-2xl lg:text-[28px] text-center leading-[1.6] mt-8 sm:mt-10 lg:mt-[40px] mb-8 sm:mb-10 lg:mb-12">
                    <span className="text-[rgb(225,162,0)]">Contact</span>{' '}
                    <span className="text-[rgb(111,95,53)]">us</span>
                </h1>

                {/* Contact Information Blocks */}
                <div className="flex flex-col sm:flex-row w-full items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-24 mb-8 sm:mb-12 lg:mb-16">
                    {/* Headquarters */}
                    <div className="flex flex-1 flex-col items-start w-full sm:w-auto">
                        <div className="flex items-start gap-2 mb-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" preserveAspectRatio="none" fill="rgba(225, 162, 0, 1)">
                                    <path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"></path>
                                </svg>
                            </div>
                            <h3 className="text-sm sm:text-base text-[rgb(225,162,0)] font-bold rounded">Headquarters</h3>
                        </div>
                        <p className="text-sm sm:text-base text-black text-start px-4">Group 5, Cu Khoi Ward,Long Bien District,Hanoi</p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-1 flex-col items-start w-full sm:w-auto">
                        <div className="flex items-start gap-2 mb-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" preserveAspectRatio="none" fill="rgba(225, 162, 0, 1)">
                                    <path d="M776-487q-5-121-89-205t-205-89v-60q72 2 135.5 30.5T729-734q48 48 76.5 111.5T836-487h-60Zm-169 0q-5-50-40-84.5T482-611v-60q75 5 127.5 57T667-487h-60Zm188 367q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.286 12.857-32.143T165-840h140q14 0 24 10t14 25l26.929 125.641Q372-665 369.5-653.5q-2.5 11.5-10.729 19.726L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.151-15T686-369l119 26q15 4 25 16.044T840-300v135q0 19.286-12.857 32.143T795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"></path>
                                </svg>
                            </div>
                            <h3 className="text-sm sm:text-base text-[rgb(225,162,0)] font-bold">Phone</h3>
                        </div>
                        <p className="text-sm sm:text-base text-black text-start">+84 936 386 861</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-1 flex-col items-start w-full sm:w-auto">
                        <div className="flex items-start gap-2 mb-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" preserveAspectRatio="none" fill="rgba(225, 162, 0, 1)">
                                    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"></path>
                                </svg>
                            </div>
                            <h3 className="text-sm sm:text-base text-[rgb(225,162,0)] font-bold">Email</h3>
                        </div>
                        <p className="text-sm sm:text-base text-black text-start break-all">lionrose.strongbody@gmail.com</p>
                    </div>
                </div>

                {/* Main Content - 2 Columns */}
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-start">
                    {/* Left Column - Welcome Message */}
                    <div className="flex flex-1 flex-col items-center justify-center text-center w-full lg:w-auto lg:text-left pt-6">
                        <div className=" lg:text-left">
                            <h3 className=" text-2xl sm:text-3xl lg:text-4xl text-black leading-[1.4] mb-6">
                                Welcome pharma<br />
                                retailers, ENT partners,<br />
                                ODM and distributors.
                            </h3>
                            <p className=" text-base sm:text-lg lg:text-xl text-black leading-[1.7]">
                                Nanocare, the manufacturer of<br />
                                nasal rinse kits, will respond to you<br />
                                within 24 hours.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="flex-1 w-full lg:w-auto">
                        <form className="w-full bg-white p-4 sm:p-6">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"
                                className="w-[380px] h-12 sm:h-[50px] mb-4 px-4 border border-gray-200 rounded text-sm sm:text-base outline-none focus:outline-none focus:ring-0 text-black placeholder:text-gray-400"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="w-[380px] h-12 sm:h-[50px] mb-4 px-4 border border-gray-200 rounded text-sm sm:text-base outline-none focus:outline-none focus:ring-0 text-black placeholder:text-gray-400"
                            />
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Phone number"
                                className="w-[380px] h-12 sm:h-[50px] mb-4 px-4 border border-gray-200 rounded text-sm sm:text-base outline-none focus:outline-none focus:ring-0 text-black placeholder:text-gray-400"
                            />
                            <textarea
                                name="message"
                                required
                                placeholder="Your message"
                                rows={4}
                                className="w-[380px] mb-4 px-4 py-3 border border-gray-200 rounded text-sm sm:text-base outline-none focus:outline-none focus:ring-0 text-black resize-none placeholder:text-gray-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-[380px] h-12 sm:h-[50px] bg-[rgb(225,162,0)] text-white font-bold text-sm sm:text-base outline-none focus:outline-none focus:ring-0 rounded cursor-pointer hover:opacity-90 transition-opacity"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;