'use client';

import React, { useState } from 'react';
import ResourceModal from './ResourceModal';
import { ResourcesListingData, ResourceItem } from '../../lib/data-loader';

interface ResourcesListingProps {
    data: ResourcesListingData | null;
}

const ResourcesListing = ({ data }: ResourcesListingProps) => {
    const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!data) return null;

    const resources = data.resources;
    // Note: resources array is kept from markdown as it contains dynamic resource data

    const handleResourceClick = (resource: ResourceItem) => {
        setSelectedResource(resource);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedResource(null);
    };

    // Separate resources by type
    const gatedResources = resources.filter(r => r.type === 'gated');
    const directResources = resources.filter(r => r.type === 'direct');

    return (
        <main className="min-h-screen font-[var(--font-hind)] bg-gradient-to-b from-gray-50 to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:py-16">
                {/* Page Title */}
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-[36px] text-center mb-4 sm:mb-6 lg:mb-8">
                    <span className="text-[rgb(111,95,53)]">Media</span>{' '}
                    <span className="text-[rgb(225,162,0)]">Resources</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                    Download Nanocare media resources to support your marketing and product promotion activities.
                </p>

                {/* Gated Resources Section */}
                {gatedResources.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex flex-row gap-1">
                                <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                                <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                                <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                            </div>
                            <h2 className="font-bold text-lg sm:text-xl lg:text-[24px] text-[rgb(111,95,53)]">
                                Resources Requiring Information
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 mb-6">
                            Some resources require you to provide contact information. Our sales team will contact you and send the resources.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                            {gatedResources.map((resource) => (
                                <div 
                                    key={resource.id} 
                                    className="flex flex-col cursor-pointer group"
                                    onClick={() => handleResourceClick(resource)}
                                >
                                    <div className="relative bg-white border-2 border-[rgb(225,162,0)] rounded-lg mb-3 sm:mb-4 overflow-hidden transform transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                                        <div 
                                            className="w-full h-[220px] sm:h-[180px] lg:h-[200px] bg-cover bg-center rounded"
                                            style={{ backgroundImage: `url(${resource.image})` }}
                                        ></div>
                                        {/* Badge indicating gated content */}
                                        <div className="absolute top-2 right-2 bg-[rgb(225,162,0)] text-white text-xs font-bold px-2 py-1 rounded">
                                            Requires Info
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded"></div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleResourceClick(resource);
                                        }}
                                        className="w-full h-10 sm:h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-xs sm:text-sm lg:text-[14px] rounded hover:opacity-90 transition-opacity"
                                    >
                                        Request Access
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Direct Download Resources Section */}
                {directResources.length > 0 && (
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex flex-row gap-1">
                                <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                                <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                                <div className="w-[2px] h-4 sm:h-[16px] bg-[rgb(225,162,0)]"></div>
                            </div>
                            <h2 className="font-bold text-lg sm:text-xl lg:text-[24px] text-[rgb(111,95,53)]">
                                Direct Download Resources
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 mb-6">
                            Click the download button to download these resources immediately.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                            {directResources.map((resource) => (
                                <div key={resource.id} className="flex flex-col">
                                    <div className="relative bg-white border border-gray-200 rounded-lg mb-3 sm:mb-4 overflow-hidden">
                                        <div 
                                            className="w-full h-[220px] sm:h-[180px] lg:h-[200px] bg-cover bg-center rounded"
                                            style={{ backgroundImage: `url(${resource.image})` }}
                                        ></div>
                                        {/* Badge indicating direct download */}
                                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            Download Now
                                        </div>
                                    </div>
                                    <a
                                        href={resource.fileUrl}
                                        download
                                        className="w-full h-10 sm:h-[40px] bg-[rgb(225,162,0)] text-white font-bold text-xs sm:text-sm lg:text-[14px] rounded hover:opacity-90 transition-opacity flex items-center justify-center"
                                    >
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal for Gated Resources */}
            {isModalOpen && selectedResource && selectedResource.type === 'gated' && (
                <ResourceModal
                    resource={selectedResource}
                    onClose={handleCloseModal}
                />
            )}
        </main>
    );
};

export default ResourcesListing;

