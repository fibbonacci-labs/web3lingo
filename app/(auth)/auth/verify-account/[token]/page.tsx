import Link from "next/link";
import { redirect } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { routes } from "@/config/routes";
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";

const checkIfValidToken = async (token: string) => {
  return await db.verificationToken.findFirst({
    where: {
      token,
    },
  });
};

export default async function VerifyAccountPage({
  params,
}: {
  params: { token: string };
}) {
  const token = await checkIfValidToken(params.token);

  if (!token) {
    return redirect(routes.main.signin);
  } else {
    await db.user.update({
      where: {
        id: token.identifier,
      },
      data: {
        emailVerified: new Date(),
      },
    });
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href={routes.main.signin}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to signin page
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo className="mx-auto h-6 w-6" />
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Account verification successful 🎉
          </h1>
          <p className="pb-4 text-sm text-muted-foreground">
            Your account has been verified. You can now sign in.
          </p>
          <Link href={routes.main.signin}>
            <Button variant={"secondary"}>Sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
