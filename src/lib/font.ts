import { Inter, Manrope } from "next/font/google";

export const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
    preload: true,
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const FontVariables = `${inter.variable} ${manrope.variable}`;