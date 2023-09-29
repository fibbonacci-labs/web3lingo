import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env.mjs";
import { routes } from "@/config/routes";
import { db } from "@/lib/db";
import { isPasswordValid } from "@/lib/utils";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: routes.main.signin,
    error: routes.main.error,
  },
  providers: [
    /* GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }), */
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Search user from db
        const user = await db.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        // Check if user exists
        if (!user) {
          throw new Error("Invalid credentials.");
        }

        // Check if user has password
        if (!user.password) {
          throw new Error("Please sign in with the provider you signed up.");
        }

        // Make sure we got password from credentials
        if (credentials && credentials.password) {
          const isValid = await isPasswordValid(
            credentials.password,
            user.password
          );

          // Check if password is valid
          if (!isValid) {
            throw new Error("Invalid credentials.");
          }

          // Check if user has verified email
          if (!user.emailVerified) {
            throw new Error("Please verify your email before signing in.");
          }

          // Return user if password is valid
          return user;
        } else {
          throw new Error("Invalid credentials.");
        }
      },
    }),
    // EmailProvider({
    //   from: env.SMTP_FROM,
    //   sendVerificationRequest: async ({ identifier, url, provider }) => {
    //     const user = await db.user.findUnique({
    //       where: {
    //         email: identifier,
    //       },
    //       select: {
    //         emailVerified: true,
    //       },
    //     });

    // email the {url} to user
    //     console.log({ user, url });
    //   },
    // }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }

        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};

export function getSession() {
  return getServerSession(authOptions) as Promise<{
    user: {
      id: string;
      name: string;
      username: string;
      email: string;
      image: string;
    };
  } | null>;
}
