export const siteConfig = {

    name: "Muhammad Omair",
    legalName: "Muhammad Omair",
    alternateName: "Muhammad Omair — AI Automation Developer",


    tagline: "AI automation and websites that move businesses forward.",
    slogan: "Automate the work. Capture more opportunities.",


    url: (process.env.FRONTEND_URL ?? "https://muhammaaddomair.vercel.app").replace(
        /\/$/,

        ""

    ),



    title: "Muhammad Omair | AI Automation & Web Developer",


    description:

        "I build practical AI automations, lead-generation systems, chatbots, websites, and web applications that help businesses save time and convert more customers.",


    shortDescription:

        "AI automation, web applications, chatbots, and lead systems built by Muhammad Omair.",


    metadataTitleTemplate:

        "%s | Muhammad Omair",


    ogImage: "/brand/omair-dev-og.svg",
    locale: "en_US",

    language: "en",

    publishedTime: "2026-06-18T00:00:00.000Z",

    modifiedTime: "2026-06-18T00:00:00.000Z",



    icons: {

        favicon: "/brand/omair-dev-mark.svg",
        apple: "/brand/omair-dev-mark.svg",
        icon96: "/brand/omair-dev-mark.svg",
        icon192: "/brand/omair-dev-mark.svg",
        icon512: "/brand/omair-dev-mark.svg",
    },



    branding: {

        themeColor: "#ffffff",

        backgroundColor: "#000000",

    },



    positioning:

        "Muhammad Omair is an AI automation and full-stack developer who builds practical systems for lead capture, customer follow-up, internal workflows, and modern web experiences.",


    mission:

        "To help growing businesses eliminate repetitive work and turn more website visitors into customers.",


    longDescription:

        "I design and develop focused business systems that improve how companies capture leads, follow up with customers, and handle repetitive operations. My work combines Next.js, React, TypeScript, Python, AI integrations, chatbots, CRM automation, and practical workflow design.",


    social: {

        linkedin: "https://www.linkedin.com/in/muhammad-omair-115a213a1",
        x: process.env.X_URL ?? "https://x.com/muhammaddomair",
        instagram: process.env.INSTAGRAM_URL,
        youtube: process.env.YOUTUBE_URL,

    },



    contact: {

        email: process.env.COMPANY_EMAIL ?? "muhammaddomair@gmail.com",
        phone: process.env.COMPANY_PHONE ?? "+92 302 3155638",
    },



    location: {

        country: process.env.COMPANY_COUNTRY ?? "Pakistan",
        city: process.env.COMPANY_CITY ?? "Karachi",
    },



    services: [

        "AI & Automation Systems",

        "Websites & Web Applications",
        "AI Chatbots & Lead Systems",
        "CRM & Workflow Automation",
    ],



    solutions: [

        "Business Process Automation",
        "AI Integration & Consulting",
    ],

} as const;



export type SiteConfig = typeof siteConfig;

