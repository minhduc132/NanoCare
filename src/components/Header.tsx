'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="relative w-full z-50 bg-[rgba(96,91,79,0.8)] backdrop-blur-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-[60px] md:h-[80px]">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <div className="w-[80px] h-[32px] md:w-[101px] md:h-[40px]">
                            <div 
                                className="w-full h-full bg-cover bg-center" 
                                style={{ 
                                    backgroundImage: 'url(https://w.ladicdn.com/5ac35791e9cb7e9e174378a0/nanocare_logo_white-20231116015501-kvxeh.svg)'
                                }}
                            ></div>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;

