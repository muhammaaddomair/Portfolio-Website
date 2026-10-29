import { siteConfig } from "@/lib/site-config";

export function getWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,

        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: siteConfig.language,

        publisher: {
            "@type": "Organization",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
        },
    };
}

export function getHomePageSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,

        name: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        inLanguage: siteConfig.language,
        isPartOf: {
            "@id": `${siteConfig.url}/#website`,
        },
        about: {
            "@id": `${siteConfig.url}/#organization`,
        },
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `${siteConfig.url}${siteConfig.ogImage}`,
            width: 1200,
            height: 630,
        },
        datePublished: siteConfig.publishedTime,
        dateModified: siteConfig.modifiedTime,
    };
}
