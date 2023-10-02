//await import("./src/env.mjs");
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
