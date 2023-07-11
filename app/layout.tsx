import "@/styles/globals.css";

import dynamic from "next/dynamic";
import Script from "next/script";

import { fontHeading, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/providers/analytics";
import { ThemeProvider } from "@/components/providers/theme";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const CrispWithNoSSR = dynamic(() => import("@/components/providers/crisp"));

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <Analytics />
          <CrispWithNoSSR />
        </ThemeProvider>
        <Script src="https://api.nextedgestarter.com/latest.js" />
        <noscript>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://api.nextedgestarter.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
