import Hero from '../../components/Hero';
import About from '../../components/About';
import Offerings from '../../components/Offerings';
import AdditionalServices from '../../components/AdditionalServices';
import Team from '../../components/Team';
import Certificates from '../../components/Certificates';
import FeaturedProducts from '../../components/FeaturedProducts';
import Partner from '../../components/Partner';
import MediaResources from '../../components/MediaResources';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen font-[TWFucmwZSFeHRyYUxpZhLnRZg]">
            <Hero />
            <About />
            <Offerings />
            <AdditionalServices />
            <Team />
            <Certificates />
            <FeaturedProducts />
            <Partner />
            <MediaResources />
            <Contact />
            <Footer />
        </main>
    );
}


