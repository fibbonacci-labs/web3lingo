import Link from "next/link";

import { routes } from "@/config/routes";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex h-screen w-full flex-col">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
        <h1 className="font-heading text-6xl">404 Not Found</h1>
        <p className="text-muted-foreground">
          The page you were looking for could not be found.
        </p>
        <Link href={routes.main.signin}>
          <Button className="mt-4">Go back</Button>
        </Link>
      </div>
    </div>
  );
}
