import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { FooterNavData } from "@/data/layout-data";
import { siteConfig } from "@/lib/site-config";

import NewsletterForm from "./newsletter-form";

const LogoDark = "/brand/omair-dev-dark.svg";


const socialLinks = [
  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=muhammaddomair%40gmail.com", label: "Gmail", icon: Mail, colorClass: "border-black bg-black" },
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    icon: FaLinkedinIn,
    colorClass: "border-[#0a66c2] bg-[#0a66c2]",
  },
  {
    href: siteConfig.social.x,
    label: "X",
    icon: FaXTwitter,
    colorClass: "border-black bg-black",
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: FaInstagram,
    colorClass: "border-[#d62976] bg-[#d62976]",
  },
  {
    href: siteConfig.social.youtube,
    label: "YouTube",
    icon: FaYoutube,
    colorClass: "border-[#ff0000] bg-[#ff0000]",
  },
].filter((item): item is typeof item & { href: string } => Boolean(item.href));

function Footer() {
  return (
    <footer
      className="relative bg-white"
    >
      <div className="relative page-layout pt-14 md:pt-18 lg:pt-20">
        <div className="grid gap-x-8 gap-y-12 pb-14 sm:grid-cols-2 md:gap-y-14 lg:grid-cols-4 xl:grid-cols-[0.65fr_0.8fr_0.9fr_1.15fr_1.55fr] xl:gap-x-10 xl:pb-20">
          <Link
            href="/"
            aria-label="Muhammad Omair home"
            className="w-fit self-start rounded-full transition-transform duration-500 hover:scale-105"
          >
            <span style={{display:"inline-flex",background:"transparent",padding:0,fontSize:28,fontWeight:800,letterSpacing:"-.05em",lineHeight:1.2}}><span style={{color:"#000"}}>omair</span><span style={{color:"#168eea"}}>.dev</span></span>
          </Link>

          {FooterNavData.map((category) => (
            <nav key={category.title} aria-label={`${category.title} links`}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                {category.title}
              </p>
              <ul className="space-y-3">
                {category.links.map((item) => (
                  <li key={`${item.path}-${item.title}`}>
                    <Link
                      href={item.path}
                      className="group inline-flex items-center gap-1.5 font-manrope text-sm font-medium leading-5 text-black/65 hover:text-black"
                    >
                      {item.title}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section
            aria-labelledby="newsletter-heading"
            className="sm:col-span-2 lg:col-span-4 xl:col-span-1 xl:pl-2"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              The signal, not the noise
            </p>
            <h2
              id="newsletter-heading"
              className="font-manrope text-xl font-bold tracking-tight text-black"
            >
              Practical systems that create leverage.
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-black/55">
              AI automation, modern web development, and lessons from building useful business software.
            </p>

            <NewsletterForm />

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {socialLinks.map(({ href, label, icon: Icon, colorClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  title={label}
                  className={`group flex h-10 w-10 items-center justify-center rounded-full border text-white transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:bg-transparent hover:text-black/65 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${colorClass}`}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-4 py-5 text-sm font-manrope font-medium text-black/70 md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-black/70">
            &copy; {new Date().getFullYear()} Muhammad Omair. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-black">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-16 overflow-hidden md:mt-8 md:h-48">
        <div className="pointer-events-none absolute -bottom-1.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap md:-bottom-8">
          <span className="bg-linear-to-t from-black/30 via-black/15 to-transparent bg-clip-text text-[clamp(3.75rem,13.75vw,13.75rem)] leading-none font-black tracking-normal text-transparent md:text-[clamp(6rem,16vw,16rem)]">
            OMAIR.DEV
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
