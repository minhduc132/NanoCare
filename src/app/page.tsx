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
import { loadBlogs, loadFeaturedProductsData, loadResourcesListingData } from '../lib/data-loader';

export default function Home() {
    const blogs = loadBlogs();
    const featuredProductsData = loadFeaturedProductsData();
    const resourcesData = loadResourcesListingData();
    
    // Debug: Log blogs count
    console.log('Blogs loaded on home page:', blogs.length);
    if (blogs.length > 0) {
        console.log('First blog:', blogs[0]);
    }
    
    // Show only first 4 blogs on home page
    const featuredBlogs = blogs.slice(0, 4);
    
    return (
        <main className="min-h-screen font-[var(--font-hind)]">
            <Hero />
            <About />
            <Offerings />
            <AdditionalServices />
            <Team />
            <Certificates />
            <FeaturedProducts data={featuredProductsData} />
            <Partner />
            <MediaResources data={resourcesData} />
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


