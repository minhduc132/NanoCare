import React from 'react';

const Certificates = () => {
    return (
        <section className="relative min-h-[550px] bg-white">
            {/* Banner mờ ở trên cùng */}
            <div className="absolute top-0 left-0 right-0 h-[80px] bg-[rgba(200,180,150,0.3)] blur-sm"></div>
            
            <div className="relative mx-auto max-w-[1200px] px-4 py-16">
                {/* Line 3 - đường vàng từ banner xuống */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[100px] w-[2px] bg-[rgb(225,162,0)]"></div>

                {/* Headline 21 */}
                <h1 className="font-[TWFucmwZSFeHRyYUxpZhLnRZg] font-bold text-[28px] text-[rgb(111,95,53)] text-center leading-[1.6] mt-[120px]">
                    Certificates<br />
                </h1>

                {/* Container cho 6 ảnh certificates */}
                <div className="flex justify-center items-center gap-4 mt-12 overflow-x-auto pb-4">
                    <div className="w-[180px] h-[260px] flex-shrink-0 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: 'url(/images/certificates.png)' }}></div>
                    <div className="w-[180px] h-[260px] flex-shrink-0 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: 'url(/images/certificates2.png)' }}></div>
                    <div className="w-[180px] h-[260px] flex-shrink-0 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: 'url(/images/certificates3.png)' }}></div>
                    <div className="w-[180px] h-[260px] flex-shrink-0 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: 'url(/images/certificates4.png)' }}></div>
                    <div className="w-[180px] h-[260px] flex-shrink-0 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: 'url(/images/certificates5.png)' }}></div>
                    <div className="w-[180px] h-[260px] flex-shrink-0 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: 'url(/images/certificates6.png)' }}></div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;