"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";

import { routes } from "@/config/routes";
import { getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserNav({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={image ?? "/avatars/01.png"} alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {name && <p className="font-medium">{name}</p>}
            {email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={routes.dashboard.settings}>Ajustes</Link>
        </DropdownMenuItem>
        {/* <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={routes.dashboard.billing}>Billing</Link>
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem
          className="cursor-pointer"
          onSelect={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          Toggle theme
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onSelect={() => signOut()}>
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
