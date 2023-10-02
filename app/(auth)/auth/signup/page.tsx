import Link from "next/link";
import { redirect } from "next/navigation";
import { nanoid } from "nanoid";

import { routes } from "@/config/routes";
import { getSession } from "@/lib/auth";
import { cn, generatePattern } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserSignupForm } from "@/components/forms/user-signup-form";
import { Logo } from "@/components/icons/logo";

export default async function SignupPage() {
  const session = await getSession();

  if (session) {
    return redirect(routes.main.dashboard);
  }

  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href={routes.main.signin}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        <>¿Ya tiene una cuenta? Iniciar sesión</>
      </Link>
      <div
        className="hidden h-full opacity-50 lg:block"
        style={generatePattern(nanoid())}
      />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Logo className="mx-auto h-6 w-6" />
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Crea una cuenta
            </h1>
            <p className="text-sm text-muted-foreground">
              Introduzca su correo electrónico para crear su cuenta
            </p>
          </div>
          <UserSignupForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            {`By clicking continue, you agree to our `}
            <Link
              href="/tos"
              className="hover:text-brand underline underline-offset-4"
            >
              {`Terms of Service `}
            </Link>
            {`and `}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
