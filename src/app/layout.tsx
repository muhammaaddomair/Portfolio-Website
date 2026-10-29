import { viewport } from "@/lib/viewport";
import { cn } from "@/lib/utils";
import { FontVariables } from "@/lib/font";
import { defaultMetadata } from "@/lib/default-metadata";
import { organizationSchema } from "@/lib/organization";
import { getHomePageSchema, getWebsiteSchema } from "@/lib/schema";

import LenisProvider from "@/providers/lenis-provider";
import { ModalsProvider } from "@/providers/modals-provider";

import DeferredConnectModal from "@/components/modals/deferred-connect-modal";

import { JsonLd } from "@/utils/json-ld";

import "@/styles/globals.css";
import "@/styles/includes.css";

export const metadata = defaultMetadata;
export { viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased dark", FontVariables)}
    >
      <body
        suppressHydrationWarning
        className="min-h-full w-full flex flex-col"
      >
        <JsonLd id="organization" data={organizationSchema} />
        <JsonLd id="website" data={getWebsiteSchema()} />
        <JsonLd id="home-page" data={getHomePageSchema()} />
        <ModalsProvider>
          <LenisProvider>{children}</LenisProvider>
          <DeferredConnectModal />
        </ModalsProvider>
      </body>
    </html>
  );
}
