import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/site";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.tagline
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LenisProvider>
            <ScrollProgress />
            <div className="min-h-screen">
              <main>{children}</main>
              <Footer />
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
