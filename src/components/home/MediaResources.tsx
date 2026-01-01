'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ResourceModal from '../resources/ResourceModal';
import { ResourceItem } from '../../lib/data-loader';

interface MediaResourcesProps {
    resources: ResourceItem[];
}

const MediaResources = ({ resources }: MediaResourcesProps) => {
    const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Show only first 4 resources on home page
    const featuredResources = resources.slice(0, 4);

    const handleResourceClick = (resource: ResourceItem) => {
        if (resource.type === 'gated') {
            setSelectedResource(resource);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedResource(null);
    };

    return (
        <section className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Title */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-12">
                    <h1 className="font-[var(--font-poppins)] text-xl sm:text-2xl lg:text-[28px] leading-[1.6] mt-8 sm:mt-10 lg:mt-[40px] mb-4 sm:mb-0">
                        <span className="text-[rgb(111,95,53)]">Nanocare's</span>{' '}
                        <span className="text-[rgb(225,162,0)]">media resource</span>
                    </h1>
                    <Link 
                        href="/resources"
                        className="text-[rgb(225,162,0)] font-semibold hover:underline"
                    >
                        View All Resources →
                    </Link>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-4 sm:gap-6">
                    {featuredResources.map((resource) => (
                        <div 
                            key={resource.id} 
                            className="flex flex-col w-full"
                        >
                            <div 
                                className={`relative bg-white rounded-lg mb-3 sm:mb-4 overflow-hidden transform transition-all duration-300 ${
                                    resource.type === 'gated' 
                                        ? 'border-2 border-[rgb(225,162,0)] cursor-pointer group hover:shadow-lg hover:scale-105' 
                                        : 'border border-gray-200'
                                }`}
                                onClick={() => resource.type === 'gated' && handleResourceClick(resource)}
                            >
                                <div 
                                    className="w-full h-[220px] sm:h-[180px] lg:h-[200px] bg-cover bg-center rounded"
                                    style={{ backgroundImage: `url(${resource.image})` }}
                                    role="img"
                                    aria-label={`${resource.title} resource image`}
                                ></div>
                                
                                {/* Badge */}
                                {resource.type === 'gated' && (
                                    <div className="absolute top-2 right-2 bg-[rgb(225,162,0)] text-white text-xs font-bold px-2 py-1 rounded">
                                        Requires Info
                                    </div>
                                )}
                                {resource.type === 'direct' && (
                                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        Download Now
                                    </div>
                                )}
                                
                                {resource.type === 'gated' && (
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded"></div>
                                )}
                            </div>
                            
                            {/* Resource Title */}
                            <h3 className="text-lg sm:text-xl font-bold text-[rgb(34,34,34)] mb-2 px-1">
                                {resource.title}
                            </h3>
                            
                            {resource.type === 'gated' ? (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleResourceClick(resource);
                                    }}
                                    className="w-full h-10 sm:h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-xs sm:text-sm lg:text-[14px] rounded hover:opacity-90 transition-opacity"
                                >
                                    Request Access
                                </button>
                            ) : (
                                <a
                                    href={resource.fileUrl || '#'}
                                    download
                                    className="w-full h-10 sm:h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-xs sm:text-sm lg:text-[14px] rounded hover:opacity-90 transition-opacity flex items-center justify-center"
                                >
                                    Download
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Gated Resources */}
            {isModalOpen && selectedResource && selectedResource.type === 'gated' && (
                <ResourceModal
                    resource={selectedResource}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
};

export default MediaResources;
