"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { SidebarMenuSlide } from "./sidebar-animation";
import SidebarCruve from "./sidebar-curve";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SidebarNavData } from "@/data/layout-data";
import { useModals } from "@/providers/modals-provider";

import { cn } from "@/lib/utils";

import { ArrowRight, ChevronRight, X } from "lucide-react";
import ArrowRightDoodleIcon from "../../../../public/icons/arrow-right-doodle-icon.png";
const Logo = "/brand/omair-dev-light.svg";

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const { openConnectModal } = useModals();

  const handleGetStarted = () => {
    onClose();
    openConnectModal();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-90 bg-black/50 backdrop-blur-md"
      />

      <motion.div
        variants={SidebarMenuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-screen w-[88%] max-w-105 z-100 bg-black fixed right-0 top-0 text-heading"
      >
        <div className="h-full w-full px-4 py-6 flex flex-col">
          <div className="w-full flex items-center justify-between mb-6">
            <div className="flex items-center ml-2">
              <Image src={Logo} alt="omair.dev" width={172} height={44} className="w-36 h-auto" />
            </div>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={onClose}
              className="flex items-center justify-center rounded-lg bg-white p-2 transition-transform duration-300 hover:scale-[1.02]"
            >
              <X strokeWidth={2.5} className="w-5 h-5 text-black" />
            </button>
          </div>

          <div className="border-y-2 py-4 flex-1 overflow-y-auto">
            <Accordion
              type="single"
              collapsible
              defaultValue={
                pathname.startsWith("/services") ? "services" : undefined
              }
              className="space-y-2"
            >
              {SidebarNavData.map((item, index) => {
                if (item.isAccordian && item.subCategory) {
                  const servicesActive = pathname.startsWith("/services");

                  return (
                    <AccordionItem
                      key={index}
                      value="services"
                      className="border-none"
                    >
                      <AccordionTrigger className="rounded-xl px-4 py-4 hover:no-underline">
                        <div className="flex items-center gap-3">
                          {servicesActive ? (
                            <motion.div
                              animate={{
                                x: [0, 8, 0],
                                rotate: [-4, 4, -4],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            >
                              <Image
                                src={ArrowRightDoodleIcon}
                                alt=""
                                className="w-12 h-auto invert mr-2"
                              />
                            </motion.div>
                          ) : (
                            <ChevronRight
                              strokeWidth={2.5}
                              className="w-4 h-4 text-sub-heading -translate-y-px"
                            />
                          )}

                          <h1 className="text-lg font-medium text-heading">
                            {item.title}
                          </h1>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pt-2 pb-0">
                        <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
                          {item.subCategory.map((service) => {
                            const active = pathname === service.path;

                            return (
                              <Link
                                key={`${service.path}-${service.title}`}
                                href={service.path}
                                onClick={onClose}
                                className={cn(
                                  "*:group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300",
                                  active ? "bg-white/10" : "hover:bg-white/5",
                                )}
                              >
                                {active ? (
                                  <motion.div
                                    animate={{
                                      x: [0, 8, 0],
                                      rotate: [-4, 4, -4],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                    }}
                                  >
                                    <Image
                                      src={ArrowRightDoodleIcon}
                                      alt=""
                                      className="w-7 h-auto invert mr-2"
                                    />
                                  </motion.div>
                                ) : (
                                  <ChevronRight
                                    strokeWidth={2.5}
                                    className={cn(
                                      "h-4 w-4 -translate-y-px",
                                      active
                                        ? "text-heading"
                                        : "text-sub-heading",
                                    )}
                                  />
                                )}

                                <h1
                                  className={cn(
                                    "text-sm leading-relaxed",
                                    active
                                      ? "text-heading"
                                      : "text-sub-heading",
                                  )}
                                >
                                  {service.title}
                                </h1>
                              </Link>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                const active = pathname === item.path;

                return (
                  <Link
                    key={index}
                    href={item.path!}
                    onClick={onClose}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-4 transition-all duration-300 ${
                      active ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    {active ? (
                      <motion.div
                        animate={{
                          x: [0, 8, 0],
                          rotate: [-4, 4, -4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <Image
                          src={ArrowRightDoodleIcon}
                          alt=""
                          className="w-12 h-auto invert mr-2"
                        />
                      </motion.div>
                    ) : (
                      <ChevronRight
                        strokeWidth={2.5}
                        className={cn(
                          "w-4 h-4 -translate-y-px",
                          active ? "text-heading" : "text-sub-heading",
                        )}
                      />
                    )}

                    <h1
                      className={cn(
                        "text-lg",
                        active
                          ? "font-medium text-heading"
                          : "text-sub-heading",
                      )}
                    >
                      {item.title}
                    </h1>
                  </Link>
                );
              })}
            </Accordion>
          </div>

          <div className="w-full mt-6 flex items-center justify-end">
            <button
              type="button"
              onClick={handleGetStarted}
              className="flex items-center gap-3 rounded-lg bg-white px-4 py-3.5 text-base font-manrope font-bold text-black transition-transform duration-300 hover:scale-[1.02] tracking-wide"
            >
              Get Started
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-heading">
                <ArrowRight size={12} />
              </div>
            </button>
          </div>
        </div>
        <SidebarCruve />
      </motion.div>
    </>
  );
}
