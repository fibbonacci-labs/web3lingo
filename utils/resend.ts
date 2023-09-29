import { Resend } from "resend";

const resendKEY = process.env.SUPABASE_URL;

export const resendClient = new Resend(resendKEY);
