import { Metadata } from 'next';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Offerings from '../components/home/Offerings';
import AdditionalServices from '../components/home/AdditionalServices';
import Team from '../components/home/Team';
import Certificates from '../components/home/Certificates';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Partner from '../components/home/Partner';
import MediaResources from '../components/home/MediaResources';
import BlogListing from '../components/blog/BlogListing';
import Contact from '../components/contact/Contact';
import Footer from '../components/layout/Footer';
import { loadBlogs, loadFeaturedProductsData, loadResources } from '../lib/data-loader';

export const metadata: Metadata = {
    title: "Nanocare - World's #1 Nasal Irrigation Device Manufacturer",
    description: "Nanocare focuses on producing a wide range of products that clean nasal passages, providing you with a sensation of unrestricted breathing. Leading manufacturer of nasal rinse kits, saline solutions, and nasal care products.",
    keywords: ['nasal irrigation', 'nasal rinse kit', 'nasal care', 'saline solution', 'nasal health', 'respiratory care', 'nasal cleansing'],
    openGraph: {
        title: "Nanocare - World's #1 Nasal Irrigation Device Manufacturer",
        description: "Leading manufacturer of nasal rinse kits, saline solutions, and nasal care products. Clean nasal passages for unrestricted breathing.",
        type: 'website',
        url: '/',
    },
    alternates: {
        canonical: '/',
    },
};

export default function Home() {
    const blogs = loadBlogs();
    const featuredProductsData = loadFeaturedProductsData();
    const resources = loadResources();
    
    // Debug: Log blogs count
    console.log('Blogs loaded on home page:', blogs.length);
    if (blogs.length > 0) {
        console.log('First blog:', blogs[0]);
    }
    
    // Show only first 5 blogs on home page
    const featuredBlogs = blogs.slice(0, 5);
    
    return (
        <main className="min-h-screen font-[var(--font-poppins)]">
            <Hero />
            <About />
            <Offerings />
            <AdditionalServices />
            <Team />
            <Certificates />
            <FeaturedProducts data={featuredProductsData} />
            <Partner />
            <MediaResources resources={resources} />
            <section className="relative bg-white pt-12 sm:pt-16 lg:pt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <BlogListing blogs={featuredBlogs} isPreview={true} />
                </div>
            </section>
            <Contact />
            <Footer />
        </main>
    );
}


