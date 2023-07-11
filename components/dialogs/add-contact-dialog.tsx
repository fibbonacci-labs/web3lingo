"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { PlusIcon } from "lucide-react";
import email from "next-auth/providers/email";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  createContactSchema,
  CreateContactType,
} from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddContactModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const form = useForm<CreateContactType>({
    resolver: zodResolver(createContactSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: CreateContactType) => {
    const payload: CreateContactType = {
      name: values.name,
      email: values.email,
    };
    const result = await axios.post(`/api/contact`, payload);

    if (result.status !== 200) {
      toast.error(result.data.error);
    }

    router.refresh();
    toast.success(result.data.message);
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon className="mr-2 h-4 w-4" />
          Create contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Contact</DialogTitle>
          <DialogDescription>
            Add a new contact to your address book.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
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
                <div className="pt-4">
                  <Button
                    isLoading={form.formState.isSubmitting}
                    disabled={form.formState.isSubmitting}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
