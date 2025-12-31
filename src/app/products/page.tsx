import { Metadata } from 'next';
import ProductsListing from '../../components/products/ProductsListing';
import { loadProducts } from '../../lib/data-loader';

export const metadata: Metadata = {
    title: 'Products | Nanocare',
    description: 'Discover Nanocare\'s high-quality nasal care products: nasal rinse bottles, saline solutions, kids nasal rinse kits and more.',
    keywords: ['nasal care products', 'nasal rinse bottle', 'saline solution', 'nasal rinse kit', 'nasal health'],
    openGraph: {
        title: 'Nanocare Products',
        description: 'Discover Nanocare\'s high-quality nasal care products',
        type: 'website',
    },
    alternates: {
        canonical: '/products',
    },
};

export default function ProductsPage() {
    const products = loadProducts();
    return <ProductsListing products={products} />;
}

