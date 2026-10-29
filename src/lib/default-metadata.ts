import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

const ogImageUrl = `${siteConfig.url}${siteConfig.ogImage}`;

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),

    title: {
        default: siteConfig.title,
        template: siteConfig.metadataTitleTemplate,
    },

    description: siteConfig.description,

    applicationName: siteConfig.name,

    creator: siteConfig.name,
    publisher: siteConfig.name,

    category: "Technology",

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    alternates: {
        canonical: siteConfig.url,
    },

    openGraph: {
        type: "website",

        locale: "en_US",

        url: "/",

        siteName: siteConfig.name,

        title: siteConfig.title,

        description: siteConfig.description,

        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: siteConfig.title,

        description: siteConfig.description,

        images: [ogImageUrl],
    },

    icons: {
        icon: siteConfig.icons.favicon,
        apple: siteConfig.icons.apple,

        other: [
            {
                rel: "icon",
                sizes: "96x96",
                url: siteConfig.icons.icon96,
            },
            {
                rel: "icon",
                sizes: "192x192",
                url: siteConfig.icons.icon192,
            },
            {
                rel: "icon",
                sizes: "512x512",
                url: siteConfig.icons.icon512,
            },
        ],
    },
};
