import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // NextAuth
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    // Github OAuth
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    GITHUB_TOKEN: z.string().min(1).optional(),
    // Google OAuth
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    // Database
    DATABASE_URL: z.string().min(1),
    // Emails
    SMTP_FROM: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    // Lemon Squeezy
    LEMON_SQUEEZY_API_KEY: z.string().min(1),
    LEMON_SQUEEZY_WEBHOOK_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CRISP_WEBSITE_ID: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // NextAuth
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    // Github OAuth
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    // Google OAuth
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // Database
    DATABASE_URL: process.env.DATABASE_URL,
    // Emails
    SMTP_FROM: process.env.SMTP_FROM,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    // Lemon Squeezy
    LEMON_SQUEEZY_API_KEY: process.env.LEMON_SQUEEZY_API_KEY,
    LEMON_SQUEEZY_WEBHOOK_SECRET: process.env.LEMON_SQUEEZY_WEBHOOK_SECRET,
    // Crisp
    NEXT_PUBLIC_CRISP_WEBSITE_ID: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID,
  },
});
