import { z } from "zod";

export const userSigninSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters." })
    .trim(),
});
export type UserSigninType = z.infer<typeof userSigninSchema>;

export const userSignupSchema = z.object({
  name: z.string().min(3, { message: "Please enter your full name." }).trim(),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters." })
    .trim(),
});
export type UserSignupType = z.infer<typeof userSignupSchema>;

export const userForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});
export type UserForgotPasswordType = z.infer<typeof userForgotPasswordSchema>;

export const userPasswordResetSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters." })
    .trim(),
  resetId: z.string().min(1),
});
export type UserPasswordResetType = z.infer<typeof userPasswordResetSchema>;

export const userProfileUpdateSchema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters." }),
});
export type UserProfileUpdateType = z.infer<typeof userProfileUpdateSchema>;
