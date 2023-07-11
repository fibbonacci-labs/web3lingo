import { Metadata } from "next";
import {
  Atom,
  Component,
  CreditCard,
  Globe,
  LogIn,
  Mail,
  RotateCcw,
  Sun,
  Type,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LemonButton from "@/components/lemon-button";

const marketingFeatures = [
  {
    icon: <Component className="h-10 w-10" />,
    title: "UI Package",
    body: (
      <>
        A UI package with all the components you need for your next application.
        Built by the wonderful <strong>Shadcn UI</strong>.
      </>
    ),
  },
  {
    icon: <LogIn className="h-10 w-10" />,
    title: "Authentication",
    body: (
      <>
        Protect your pages and API routes and entire app using{" "}
        <strong>next-auth</strong>
      </>
    ),
  },
  {
    icon: <Mail className="h-10 w-10" />,
    title: "Emails",
    body: (
      <>
        Ready to use email templates with <strong>react-email</strong> and
        pre-configured email service with <strong>resend</strong>.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <Atom className="h-10 w-10" />
      </div>
    ),
    title: "Next.js 13 & React 18",
    body: (
      <>
        Latest features from Next 13 using the brand new App Router with full
        React 18 support including streaming.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <Type className="h-10 w-10" />
      </div>
    ),
    title: "Full-stack Typesafety",
    body: (
      <>
        Full-stack Typesafety with <strong>zod</strong>. Typesafe database
        querying and easy to manage migrations using <strong>Prisma</strong>.
      </>
    ),
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Edge Compute",
    body: (
      <>
        Ready to deploy on Edge functions to ensure a blazingly fast application
        with optimal UX.
      </>
    ),
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Payments",
    body: (
      <>
        Accept one time payments or create subscriptions with{" "}
        <strong>Lemonsqueezy</strong>.
      </>
    ),
  },
  {
    icon: <Sun className="h-10 w-10" />,
    title: "Light & Dark Mode",
    body: (
      <>
        Ready made <strong>light</strong> and <strong>dark</strong> modes.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <RotateCcw className="h-10 w-10" />
      </div>
    ),
    title: "Rate limiting",
    body: (
      <>
        Limit requests to your API routes using{" "}
        <strong>upstash-ratelimit</strong>.
      </>
    ),
  },
];

export default function LandingPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center pt-48">
      <div className="z-10 min-h-[50vh] w-full max-w-4xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-6xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          All-in-one solution to kickstart your next project on the edge
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-muted-foreground/80 opacity-0 md:text-xl"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          Next Edge Starter is enterprise ready comprehensive Next.js 13 edge
          starter kit for building and launching modern web applications.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up flex-col items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
        >
          <LemonButton text={"Get the codebase for $49"} />
          <p className="pt-4 text-center text-sm text-muted-foreground">
            ^ Everything you see here and the demo app is included in the
            codebase. ^
          </p>
        </div>
      </div>
      <div className="my-16 w-full max-w-screen-lg animate-fade-up gap-5 border-t p-5 xl:px-0">
        <h2 className="pt-4 text-center text-3xl font-bold md:text-4xl">
          What is included?
        </h2>

        <p className="pb-8 pt-4 text-center text-lg">
          This repo comes fully stacked with everything you need to empower your
          startup. Say goodbye to integration headaches and start building your
          product today!
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {marketingFeatures.map((feature) => (
            <Card key={feature.title} className={cn("p-2")}>
              <CardHeader>{feature.icon}</CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="mt-2">
                  {feature.body}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <p className="text-md pb-4">
        Got a question or feedback? Shoot an email to{" "}
        <strong>mail@nextedgestarter.com</strong>
      </p>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Next Edge Starter - The ultimate Next.js starter kit",
  description:
    "Next Edge Starter is enterprise ready comprehensive Next.js starter kit for building and launching modern web applications.",
};
