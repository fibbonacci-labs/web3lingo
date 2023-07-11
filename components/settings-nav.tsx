"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface SettingsNavProps {
  items: any[];
}

export function SettingsNav({ items }: SettingsNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path?.endsWith(item.href) ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
