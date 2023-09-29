"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { routes } from "@/config/routes";
import { authErrors, cn } from "@/lib/utils";
import { userSigninSchema, UserSigninType } from "@/lib/validations/user";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "@/components/icons/github-icon";
import { GoogleIcon } from "@/components/icons/google-icon";
import { OauthButton } from "@/components/oauth-button";

export function UserSigninForm() {
  const [githubLoading, setGithubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const errorMessage = error && (authErrors[error] ?? authErrors.default);

  const router = useRouter();

  const form = useForm<UserSigninType>({
    resolver: zodResolver(userSigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: UserSigninType) {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (result?.error) {
      return toast.error(result.error);
    }

    form.reset();
    return router.push(routes.main.dashboard);
  }

  const disabled =
    form.formState.isSubmitting || githubLoading || googleLoading;

  return (
    <div className={cn("grid gap-6")}>
      {errorMessage && <p className="text-destructive">{errorMessage}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={disabled} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={disabled} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p className="py-2 text-right text-sm text-muted-foreground">
              <Link
                href={routes.main.forgotPassword}
                className={cn(
                  "hover:text-brand underline underline-offset-4",
                  disabled && "pointer-events-none cursor-not-allowed"
                )}
              >
               ¿Olvidó su contraseña?
              </Link>
            </p>
            <Button variant="primary"  isLoading={form.formState.isSubmitting} disabled={disabled}>
            Iniciar sesión con Email
            </Button>
          </div>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
          O continuar con
          </span>
        </div>
      </div>
      <OauthButton
        text="Sign up with Google"
        icon={<GoogleIcon className="h-4 w-4" />}
        isDisabled={disabled}
        provider="google"
        setLoading={setGoogleLoading}
        isLoading={googleLoading}
      />
      {/* <OauthButton
        text="Sign up with Github"
        icon={<GithubIcon className="h-4 w-4" />}
        isDisabled={disabled}
        provider="github"
        setLoading={setGithubLoading}
        isLoading={githubLoading}
      /> */}
    </div>
  );
}
