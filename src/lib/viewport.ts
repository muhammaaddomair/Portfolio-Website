import type { Viewport } from "next";
import { siteConfig } from "./site-config";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    interactiveWidget: "resizes-visual",
    viewportFit: "cover",
    themeColor: siteConfig.branding.themeColor,
};