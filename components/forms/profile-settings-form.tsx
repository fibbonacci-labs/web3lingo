"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  userProfileUpdateSchema,
  UserProfileUpdateType,
} from "@/lib/validations/user";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const ProfileSettingsForm = ({ name }: { name: string }) => {
  const router = useRouter();

  const form = useForm<UserProfileUpdateType>({
    resolver: zodResolver(userProfileUpdateSchema),
    defaultValues: {
      name,
    },
  });

  const onSubmit = async (values: UserProfileUpdateType) => {
    const payload: UserProfileUpdateType = {
      name: values.name,
    };

    const result = await axios.post(`/api/user`, payload);

    if (result.status !== 200) {
      toast.error(result.data.error);
    }

    router.refresh();
    toast.success(result.data.message);
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Profile settings</CardTitle>
          <CardDescription>
            View and manage your profile details.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                          <Input {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="pt-4">
                  <Button isLoading={isLoading} disabled={isLoading}>
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
