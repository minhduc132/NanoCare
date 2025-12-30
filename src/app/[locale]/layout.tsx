import { I18nProvider } from "../../i18n/I18nProvider";
import viMessages from "../../i18n/messages/vi.json";
import enMessages from "../../i18n/messages/en.json";
import type { Metadata } from "next";

const messagesMap: Record<string, Record<string, string>> = {
    vi: viMessages,
    en: enMessages,
};

const metadataMap: Record<string, Metadata> = {
    en: {
        title: "Nanocare",
        description: "Nanocare focuses on producing a wide range of products that clean nasal passages, providing you with a sensation of unrestricted breathing. Leading manufacturer of nasal rinse kits, saline solutions, and nasal care products.",
        keywords: ["nasal irrigation", "nasal rinse kit", "nasal care", "saline solution", "nasal health", "respiratory care", "nasal cleansing"],
        openGraph: {
            title: "Nanocare - World's #1 Nasal Irrigation Device Manufacturer",
            description: "Leading manufacturer of nasal rinse kits, saline solutions, and nasal care products. Clean nasal passages for unrestricted breathing.",
            locale: "en_US",
        },
        alternates: {
            canonical: "/en",
            languages: {
                "en": "/en",
                "vi": "/vi",
            },
        },
    },
    vi: {
        title: "Nanocare ",
        description: "Nanocare tập trung sản xuất đa dạng sản phẩm giúp làm sạch khoang mũi, mang lại cho bạn cảm giác hít thở thông thoáng. Nhà sản xuất hàng đầu các bộ dụng cụ rửa mũi, dung dịch muối sinh lý và sản phẩm chăm sóc mũi.",
        keywords: ["rửa mũi", "bộ dụng cụ rửa mũi", "chăm sóc mũi", "dung dịch muối sinh lý", "sức khỏe mũi", "chăm sóc hô hấp", "làm sạch mũi"],
        openGraph: {
            title: "Nanocare - Nhà sản xuất thiết bị rửa mũi số 1 thế giới",
            description: "Nhà sản xuất hàng đầu các bộ dụng cụ rửa mũi, dung dịch muối sinh lý và sản phẩm chăm sóc mũi. Làm sạch khoang mũi để hít thở thông thoáng.",
            locale: "vi_VN",
        },
        alternates: {
            canonical: "/vi",
            languages: {
                "en": "/en",
                "vi": "/vi",
            },
        },
    },
};

export function generateStaticParams() {
    return [{ locale: "vi" }, { locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = messagesMap[locale] ? locale : "en";
    return metadataMap[validLocale] || metadataMap.en;
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const validLocale = messagesMap[locale] ? locale : "en";
    const messages = messagesMap[validLocale];

    return (
        <I18nProvider messages={messages}>
            {children}
        </I18nProvider>
    );
}



