"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";
import {
  userForgotPasswordSchema,
  UserForgotPasswordType,
} from "@/lib/validations/user";
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

export function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof userForgotPasswordSchema>>({
    resolver: zodResolver(userForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: UserForgotPasswordType) {
    const payload: UserForgotPasswordType = {
      email: values.email,
    };

    const result = await axios.post("/api/auth/forgot-password", payload, {
      validateStatus: () => true,
      timeout: 50000,
    });

    if (result?.status !== 200) {
      return toast.error(result.data.error);
    }

    toast.success(result.data.message);

    form.reset();
  }

  return (
    <div className={cn("grid gap-6")}>
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
                      <Input
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              isLoading={form.formState.isSubmitting}
              disabled={form.formState.isSubmitting}
            >
              Send reset link
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
