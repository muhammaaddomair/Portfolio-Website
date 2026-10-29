import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: siteConfig.name,
        description: siteConfig.description,
        start_url: "/",
        id: "/",
        lang: siteConfig.language,
        display: "standalone",
        background_color: siteConfig.branding.backgroundColor,
        theme_color: siteConfig.branding.themeColor,
        orientation: "portrait-primary",
        icons: [
            {
                src: siteConfig.icons.favicon,
                sizes: "16x16",
                type: "image/x-icon",
            },
            {
                src: siteConfig.icons.icon96,
                sizes: "96x96",
                type: "image/png",
            },
            {
                src: siteConfig.icons.icon192,
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: siteConfig.icons.icon512,
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: siteConfig.icons.apple,
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}
