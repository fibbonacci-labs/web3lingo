import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Font files can be colocated inside of `pages`
export const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
  display: "swap",
});
