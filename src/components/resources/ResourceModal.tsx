'use client';

import React, { useState, FormEvent } from 'react';
import { ResourceItem } from '../../lib/data-loader';

interface ResourceModalProps {
    resource: ResourceItem;
    onClose: () => void;
}

const ResourceModal = ({ resource, onClose }: ResourceModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call - In production, send to your backend
        // The backend should:
        // 1. Save the lead information
        // 2. Notify sales team
        // 3. Optionally send confirmation email to customer
        
        try {
            // Example: await fetch('/api/resources/request', { method: 'POST', body: JSON.stringify(formData) });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
            
            setIsSubmitted(true);
            // In production, you might want to send this data to your backend
            console.log('Lead information:', {
                resource: resource.title,
                ...formData,
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (isSubmitted) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="fixed inset-0 bg-white/30 backdrop-blur-sm"></div>
                <div className="bg-white rounded-lg max-w-md w-full p-6 sm:p-8 shadow-2xl relative z-10">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                            <h3 className="text-xl font-bold text-[rgb(34,34,34)] mb-2">
                                Success!
                        </h3>
                        <p className="text-base text-gray-700 mb-6">
                            Thank you for providing your information. Our sales team will contact you as soon as possible and send the requested resources.
                        </p>
                        <button
                            onClick={onClose}
                            className="w-full h-12 bg-[rgb(225,162,0)] text-white font-bold rounded hover:opacity-90 transition-opacity"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-white/30 backdrop-blur-sm"></div>
            <div className="bg-white rounded-lg max-w-md w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-[rgb(34,34,34)]">
                        Provide Information
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        ×
                    </button>
                </div>

                <div className="mb-6">
                    <div className="w-full h-[150px] bg-cover bg-center rounded mb-4" style={{ backgroundImage: `url(${resource.image})` }}></div>
                    <p className="text-base text-gray-700">
                        <strong>Resource:</strong> {resource.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Please fill in the information below. Our sales team will contact you and send the resources as soon as possible.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full h-12 px-4 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[rgb(225,162,0)]"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full h-12 px-4 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[rgb(225,162,0)]"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-6">
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full h-12 px-4 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[rgb(225,162,0)]"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 h-12 border-2 border-gray-300 text-gray-700 font-bold rounded hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 h-12 bg-[rgb(225,162,0)] text-white font-bold rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Request'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResourceModal;

