import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { routes } from "@/config/routes";
import { buttonVariants } from "@/components/ui/button";

export default function MarketingLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="container z-50 flex h-16 items-center bg-background">
        <div className="flex gap-6 md:gap-10">
          {/*
          <Link
            href={routes.main.dashboard}
            className="flex items-center space-x-2"
          >
             <Logo />
            <span className="font-heading text-xl font-bold sm:inline-block">
              {siteConfig.title}
            </span>
          </Link> */}
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Link
            href={routes.main.signin}
            className={buttonVariants({ variant: "outline" })}
          >
            Entrar
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </nav>
      <main className="flex-1">{props.children}</main>
    </div>
  );
}
