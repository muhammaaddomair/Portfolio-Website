import {

  LucideIcon,

  TrendingUp,

  Clock3,

  Cpu,

  FileCode2,

  Layers3,

  Rocket,

  ShieldAlert,

  ShieldCheck,

} from "lucide-react";



type SubCategoryItem = {

  path: string;

  title: string;

  description: string;

  beforeIcon: LucideIcon;

  afterIcon: LucideIcon;

};



type NavItemLink = {

  path: string;

  title: string;

  isSubCategory?: false;

  subCategory?: never;

};



type NavItemDropdown = {

  title: string;

  path?: never;

  isSubCategory: true;

  subCategory: SubCategoryItem[];

};



export type HeaderNavItem = NavItemLink | NavItemDropdown;



export const HeaderNavData: HeaderNavItem[] = [

  {

    path: "/#solutions",
    title: "Skills",

  },



  {

    title: "Solutions",

    path: "#solutions",
  },



  {

    title: "Projects",
    path: "https://github.com/muhammaaddomair",
  },



  {

    title: "Services",

    isSubCategory: true,

    subCategory: [

      {

        path: "#solutions",
        title: "AI & Automation",

        description:

          "Automate workflows, operations, and business processes with AI-powered systems.",

        beforeIcon: Clock3,

        afterIcon: Cpu,

      },

      {

        path: "/services/software-digital-products",

        title: "Software & Digital Products",

        description:

          "Build scalable applications, platforms, APIs, and business systems.",

        beforeIcon: FileCode2,

        afterIcon: Layers3,

      },

      {

        path: "/services/growth-revenue-systems",

        title: "Growth & Revenue Systems",

        description:

          "Create lead generation, sales, and growth systems that drive revenue.",

        beforeIcon: TrendingUp,

        afterIcon: Rocket,

      },

      {

        path: "/services/cybersecurity-protection",

        title: "Cybersecurity & Protection",

        description:

          "Protect infrastructure, applications, and data with proactive security.",

        beforeIcon: ShieldAlert,

        afterIcon: ShieldCheck,

      },

    ],

  },

];



export const SidebarNavData = [
  {

    path: "/",

    title: "Home",

  },



  {

    path: "/#solutions",
    title: "Skills",
  },



  {

    title: "Services",

    isAccordian: true,

    subCategory: [

      {

        path: "#solutions",
        title: "AI & Automation",

      },

      {

        path: "#solutions",
        title: "Software & Digital Products",

      },

      {

        path: "#solutions",
        title: "Growth & Revenue Systems",

      },

      {

        path: "#contact",
        title: "Custom Development",
      },

    ],

  },



  {

    title: "Solutions",

    path: "#solutions",
  },



  {

    title: "Projects",
    path: "https://github.com/muhammaaddomair",
  },



  {

    title: "LinkedIn",
    path: "https://www.linkedin.com/in/muhammad-omair-115a213a1",
  },



  {

    title: "Email",
    path: "https://mail.google.com/mail/?view=cm&fs=1&to=muhammaddomair%40gmail.com",
  },



  {

    title: "WhatsApp",
    path: "https://wa.me/923023155638",
  },



  {

    title: "Industries",

    path: "/industries",

  },



  {

    title: "Insights",

    path: "/insights",

  },
];

export const FooterNavData = [
  {
    title: "Connect",
    links: [
      { path: "/", title: "Home" },
      { path: "/#solutions", title: "Skills" },
      { path: "https://github.com/muhammaaddomair", title: "GitHub" },
      { path: "https://www.linkedin.com/in/muhammad-omair-115a213a1", title: "LinkedIn" },
    ],
  },
  {
    title: "Contact",
    links: [
      { path: "#contact", title: "Start a Project" },
      { path: "https://mail.google.com/mail/?view=cm&fs=1&to=muhammaddomair%40gmail.com", title: "Email" },
      { path: "https://wa.me/923023155638", title: "WhatsApp" },
    ],
  },
  {
    title: "Services",
    links: [
      { path: "#solutions", title: "AI Automation" },
      {
        path: "#solutions",
        title: "Websites & Web Apps",
      },
      {
        path: "#solutions",
        title: "AI Chatbots & Lead Systems",
      },
      {
        path: "#solutions",
        title: "CRM & Workflow Automation",
      },
    ],
  },
] as const;
