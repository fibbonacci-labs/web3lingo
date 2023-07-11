"use client";

import { useEffect } from "react";
import Link from "next/link";

import { routes } from "@/config/routes";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // You can log the error to an error reporting service from here.
    console.error(error);
  }, [error]);

  return (
    <div className="container flex h-screen w-full flex-col">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
        <h1 className="font-heading text-6xl">Oh, something went wrong.</h1>
        <p className="text-muted-foreground">
          We are sorry. Please retry your last action again.
        </p>
        <Button className="mt-4" onClick={reset}>
          Retry
        </Button>
        <Link href={routes.main.landing}>
          <Button variant="secondary">Go to home page</Button>
        </Link>
      </div>
    </div>
  );
}
