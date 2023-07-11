import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().min(1, { message: "Please enter a valid email." }),
  email: z
    .string()
    .email({ message: "Password must be atleast 6 characters." }),
});
export type CreateContactType = z.infer<typeof createContactSchema>;
