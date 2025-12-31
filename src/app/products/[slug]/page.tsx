import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetail from '../../../components/products/ProductDetail';
import { loadProducts, getProductDetail } from '../../../lib/data-loader';

export const dynamicParams = false; // Return 404 for unknown slugs

export async function generateStaticParams() {
    const products = loadProducts();
    console.log('Generating static params for products:', products.length);
    return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}): Promise<Metadata> {
    const { slug } = await params;
    const products = loadProducts();
    const product = products.find(p => p.slug === slug);
    
    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }
    
    return {
        title: `${product.name.split('\n')[0]} | Nanocare`,
        description: `Discover ${product.name.split('\n')[0]} - high-quality nasal care product from Nanocare. Detailed information, specifications and benefits.`,
        keywords: ['nasal care product', 'nanocare', 'nasal rinse', 'nasal health'],
        openGraph: {
            title: `${product.name.split('\n')[0]} | Nanocare`,
            description: `Discover ${product.name.split('\n')[0]} from Nanocare`,
            images: [product.image],
            type: 'website',
        },
        alternates: {
            canonical: `/products/${slug}`,
        },
    };
}

export default async function ProductDetailPage({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}) {
    const { slug } = await params;
    const products = loadProducts();
    const product = products.find(p => p.slug === slug);
    
    if (!product) {
        notFound();
    }
    
    const detail = getProductDetail(slug) || {
        slug,
        description: '',
        specifications: [],
        benefits: [],
        images: [],
    };
    
    return <ProductDetail product={product} detail={detail} />;
}

