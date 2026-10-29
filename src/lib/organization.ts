import { siteConfig } from "@/lib/site-config";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,

    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.alternateName,

    url: siteConfig.url,

    logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.icons.icon512}`,
        width: 512,
        height: 512,
    },
    image: `${siteConfig.url}${siteConfig.ogImage}`,

    description: siteConfig.description,

    slogan: siteConfig.slogan,

    email: siteConfig.contact.email || undefined,

    telephone: siteConfig.contact.phone || undefined,

    address:
        siteConfig.location.country || siteConfig.location.city
            ? {
                "@type": "PostalAddress",
                addressLocality:
                    siteConfig.location.city || undefined,
                addressCountry:
                    siteConfig.location.country || undefined,
            }
            : undefined,

    sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.x,
        siteConfig.social.instagram,
        siteConfig.social.youtube,
    ].filter(Boolean),

    knowsAbout: [
        "AI Automation",
        "Workflow Automation",
        "AI Agents",
        "Software Development",
        "Platform Engineering",
        "Revenue Infrastructure",
        "Lead Generation Systems",
        "Sales Automation",
        "Cybersecurity",
        "Penetration Testing",
        "Cloud Infrastructure",
        "Business Systems",
        "Digital Transformation",
    ],
};
