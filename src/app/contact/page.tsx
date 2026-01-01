import { Metadata } from 'next';
import Contact from '../../components/contact/Contact';

export const metadata: Metadata = {
    title: 'Contact Us | Nanocare',
    description: 'Contact Nanocare - World\'s #1 nasal irrigation device manufacturer. We will respond to you within 24 hours.',
    keywords: ['contact nanocare', 'contact information', 'nanocare address'],
    openGraph: {
        title: 'Contact Us | Nanocare',
        description: 'Contact Nanocare - World\'s #1 nasal irrigation device manufacturer. We will respond to you within 24 hours.',
        type: 'website',
        url: '/contact',
        siteName: 'Nanocare',
    },
    twitter: {
        card: 'summary',
        title: 'Contact Us | Nanocare',
        description: 'Contact Nanocare - World\'s #1 nasal irrigation device manufacturer.',
    },
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return <Contact />;
}

