"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/icons/logo";

import CourseSwitcher from "./course-switcher";
import { CurrentCourse } from "./CurrentCourse";

interface MainNavProps {
  children?: React.ReactNode;
  items: any[];
  path?: string;
}

export function MainNav({ children, items }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const path = usePathname();

  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href={routes.main.dashboard}
        className="hidden items-center space-x-2 md:flex"
      >
        <Logo />
        <span className="hidden font-heading text-xl font-bold sm:inline-block">
          {siteConfig.title}
        </span>
      </Link>
      <NavigationMenu className="hidden gap-2 md:flex">
        <NavigationMenuList>
          {items?.map((item, index) => (
            <NavigationMenuItem key={item.href + index}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    path?.endsWith(item.href) && "bg-accent"
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <X /> : <Logo />}
        <span className="font-bold">Show Menu</span>
      </button>

      {showMobileMenu && (
        <div
          className={cn(
            "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-1 md:hidden"
          )}
        >
          <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="font-bold">{siteConfig.title}</span>
            </Link>
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-md flex w-full items-center rounded-md p-3 font-medium"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
