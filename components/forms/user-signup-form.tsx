"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { authErrors, cn } from "@/lib/utils";
import { userSignupSchema, UserSignupType } from "@/lib/validations/user";
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

export function UserSignupForm() {
  const [githubLoading, setGithubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const errorMessage = error && (authErrors[error] ?? authErrors.default);

  const form = useForm<UserSignupType>({
    resolver: zodResolver(userSignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: UserSignupType) {
    const payload: UserSignupType = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const result = await axios.post("/api/auth/signup", payload, {
      validateStatus: () => true,
    });

    if (result?.status !== 200) {
      return toast.error(result.data.error);
    }

    toast.success(result.data.message);
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={disabled} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button isLoading={form.formState.isSubmitting} disabled={disabled}>
              Sign up with Email
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
            Or continue with
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
      <OauthButton
        text="Sign up with Github"
        icon={<GithubIcon className="h-4 w-4" />}
        isDisabled={disabled}
        provider="github"
        setLoading={setGithubLoading}
        isLoading={githubLoading}
      />
    </div>
  );
}
