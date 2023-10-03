import "@/styles/globals.css";

import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Script from "next/script";

import { fontHeading, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/providers/analytics";
import { ThemeProvider } from "@/components/providers/theme";

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  //const CrispWithNoSSR = dynamic(() => import("@/components/providers/crisp"));

  return (
    <html lang="es" suppressHydrationWarning className={inter.className}>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
        <Toaster />
       
        {/*  
         <Analytics />
        <CrispWithNoSSR /> 
        */}

       {/*  <Script src="https://api.web3lingo.com/latest.js" />
        <noscript>
           eslint-disable @next/next/no-img-element 
          <img
            src="https://api.web3lingo.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript> 
        */}

      </body>
    </html>
  );
}
