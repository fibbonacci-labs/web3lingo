"use client";

import { Rocket } from "lucide-react";

import { cn, saEvent } from "@/lib/utils";

import { Button } from "./ui/button";

export default function LemonButton({ text }: { text: string }) {
  return (
    <Button
      size="lg"
      className={cn("lemonsqueezy-button", "text-md")}
      onClick={() => {
        saEvent("home_page_purchase_click");
        window.open(
          "https://web3lingo.lemonsqueezy.com/checkout/buy/5224047b-3634-4bfd-b108-bd3abbc5a7ca?embed=1&media=0&discount=0",
          "_blank"
        );
      }}
    >
      <Rocket className="mr-2 h-4 w-4" />
      <span>{text}</span>
    </Button>
  );
}
