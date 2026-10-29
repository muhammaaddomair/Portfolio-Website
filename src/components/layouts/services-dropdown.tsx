"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { HeaderNavItem } from "@/data/layout-data";

import { ChevronDown } from "lucide-react";
import ArrowRightDoodleIcon from "../../../public/icons/arrow-right-doodle-icon.png";

export function ServicesDropdown({ item, lightHeader = false }: { item: HeaderNavItem; lightHeader?: boolean }) {
  const [hoverOpen, setHoverOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = hoverOpen || pinned;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pinned) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setPinned(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [pinned]);

  if (!item.subCategory) return null;

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => setHoverOpen(false)}
    >
      <button
        onClick={() => setPinned((p) => !p)}
        className={`relative rounded-xl px-3.5 py-3 text-sm font-medium font-manrope ${lightHeader ? "text-black" : "text-heading"} transition-colors duration-300 flex items-center gap-1 cursor-pointer`}
      >
        {item.title}
        <ChevronDown
          strokeWidth={2.5}
          className={`h-auto w-4 translate-y-px transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-[calc(100%+20px)] z-50 w-160 translate-x-[-58%]"
          >
            <div
              className="bg-glass rounded-lg p-3"
              style={{
                boxShadow:
                  "0 20px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                {item.subCategory.map((service) => {
                  const BeforeIcon = service.beforeIcon;
                  const AfterIcon = service.afterIcon;
                  return (
                    <Link
                      key={service.title}
                      href={service.path}
                      onClick={() => {
                        setPinned(false);
                        setHoverOpen(false);
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white p-5 transition-all duration-300 hover:border-white/13 hover:bg-gray-400"
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_65%)]" />

                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/30 text-accent border-2 border-accent mr-4">
                            <BeforeIcon size={20} />
                          </div>

                          <Image
                            src={ArrowRightDoodleIcon}
                            alt="Arrow Right"
                            className="h-4 w-auto"
                          />

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/30 text-primary border-2 border-primary transition-transform duration-300 group-hover:scale-110 ml-4">
                            <AfterIcon size={20} />
                          </div>
                        </div>

                        <h4 className="mb-2 text-base font-semibold font-manrope text-black">
                          {service.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-black/60">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
