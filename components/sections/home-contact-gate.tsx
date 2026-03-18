"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site";

export function HomeContactGate() {
  const handleOpenProjectForm = () => {
    window.dispatchEvent(new Event("open-project-form"));
  };

  return (
    <section id="contact" className="scroll-mt-24 h-screen overflow-hidden p-5">
      <div className="relative h-full overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0 -z-20">
          <Image src="/images/cta-img.webp" alt="Contact background" fill className="object-cover" priority />
        </div>

        <div className="relative mx-auto flex h-full max-w-[1800px] flex-col justify-between px-4 pb-4 pt-10 md:px-6 md:pb-5 md:pt-12">
          <div className="min-h-0 flex-1">
            <div className="relative grid h-full w-full grid-cols-1 gap-8 p-3 text-white lg:grid-cols-2 lg:gap-16 lg:p-4">
              <div className="pointer-events-none absolute bottom-6 left-1/2 top-6 hidden -translate-x-1/2 lg:block">
                <div className="relative h-full w-px bg-white/14">
                  <div className="absolute left-0 top-1/2 h-16 w-px -translate-y-1/2 bg-[#FE5A37]" />
                </div>
              </div>

              <div className="flex max-w-[540px] flex-col justify-center gap-5">
                <h2 className="text-[36px] font-semibold leading-[0.96] tracking-[-0.04em] text-white md:text-[52px]">
                  LET&apos;S ALIGN ON YOUR
                  <br />
                  NEXT LAUNCH
                </h2>

                <p className="mt-3 max-w-[440px] text-[14px] leading-5 text-white">
                  Ready to elevate your digital presence? Office105 partners with teams to plan, design, and build
                  experiences that perform and scale.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <p className="pp-mono text-[10px] uppercase tracking-[0.18em] text-white/80">Mail</p>
                    <p className="mt-2 text-sm text-white underline underline-offset-4">{siteConfig.email}</p>
                  </div>

                  <div>
                    <p className="pp-mono text-[10px] uppercase tracking-[0.18em] text-white/80">Phone</p>
                    <p className="mt-2 text-sm text-white underline underline-offset-4">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-3">
                  <Link
                    href={siteConfig.socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="header-pill pp-mono inline-flex h-[48px] items-center justify-center gap-2 px-3 text-[10px] uppercase tracking-[0.14em] text-[#111111] sm:gap-3 sm:px-5 sm:text-[11px] sm:tracking-[0.16em]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path
                        fill="#25D366"
                        d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.53 0 .2 5.34.2 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.66a11.9 11.9 0 0 0 5.74 1.47h.01c6.55 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.16-3.44-8.43Zm-8.44 18.31h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.86 9.86 0 0 1-1.52-5.24c0-5.45 4.43-9.88 9.88-9.88a9.8 9.8 0 0 1 6.98 2.9 9.81 9.81 0 0 1 2.9 6.98c0 5.45-4.43 9.89-9.83 9.89Zm5.42-7.4c-.3-.15-1.79-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.22-.66.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.68-2.1-.18-.3-.02-.46.13-.6.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.1 2.96 1.25 3.16.15.2 2.16 3.3 5.23 4.63.73.31 1.3.5 1.75.64.74.23 1.42.2 1.95.12.6-.09 1.79-.73 2.04-1.44.25-.71.25-1.32.18-1.44-.08-.13-.28-.2-.58-.35Z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Contact on WhatsApp</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </Link>

                  <Link
                    href={siteConfig.socialLinks.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="header-pill pp-mono inline-flex h-[48px] items-center justify-center gap-2 px-3 text-[10px] uppercase tracking-[0.14em] text-[#111111] sm:gap-3 sm:px-5 sm:text-[11px] sm:tracking-[0.16em]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path
                        fill="#229ED9"
                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm5.894 8.218-1.97 9.29c-.149.66-.54.823-1.092.513l-3.021-2.227-1.457 1.402c-.161.161-.296.296-.607.296l.217-3.086 5.62-5.077c.244-.217-.054-.338-.378-.121l-6.948 4.374-2.994-.934c-.651-.203-.664-.651.136-.963l11.706-4.514c.542-.196 1.016.128.788 1.047Z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Text on Telegram</span>
                    <span className="sm:hidden">Telegram</span>
                  </Link>

                  <button
                    type="button"
                    onClick={handleOpenProjectForm}
                    className="pp-mono col-span-2 inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white/90 px-3 text-[10px] uppercase tracking-[0.14em] text-[#111111] transition-colors duration-300 hover:bg-[#FE5A37] hover:text-white sm:hidden"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M7 8.5h10" />
                      <path d="M7 12h6.5" />
                      <path d="M7 15.5h4" />
                      <path d="M5 5h14v10a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                    </svg>
                    Contact Us
                  </button>
                </div>
              </div>

              <form className="hidden h-full items-center text-white lg:flex">
                <div className="w-full space-y-7">
                  <div>
                    <label className="pp-mono mb-2.5 block text-[13px] uppercase tracking-[0.18em] text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-white/55 bg-transparent pb-3 text-[15px] outline-none transition-all duration-300 focus:border-[#FE5A37]"
                    />
                  </div>

                  <div>
                    <label className="pp-mono mb-2.5 block text-[13px] uppercase tracking-[0.18em] text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="w-full border-b border-white/55 bg-transparent pb-3 text-[15px] outline-none transition-all duration-300 focus:border-[#FE5A37]"
                    />
                  </div>

                  <div>
                    <label className="pp-mono mb-2.5 block text-[13px] uppercase tracking-[0.18em] text-white">
                      Your Message
                    </label>
                    <textarea
                      rows={2}
                      className="w-full resize-none border-b border-white/55 bg-transparent pb-3 text-[15px] outline-none transition-all duration-300 focus:border-[#FE5A37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="header-pill pp-mono inline-flex h-[50px] w-full items-center justify-between gap-4 px-6 text-[12px] uppercase tracking-[0.16em] text-[#111111]"
                  >
                    <span className="header-text-wrap">
                      <span className="header-text-track">
                        <span className="header-text-line">Send Message</span>
                        <span className="header-text-line">Send Message</span>
                      </span>
                    </span>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M5 12h12" />
                      <path d="m13 7 5 5-5 5" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Footer embedded />
        </div>
      </div>
    </section>
  );
}

export default HomeContactGate;
