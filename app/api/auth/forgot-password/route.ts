import { NextRequest, NextResponse } from "next/server";
import ForgotPasswordEmail from "@/transactional/emails/forgot-password-email";
import dayjs from "dayjs";
import { Resend } from "resend";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { db } from "@/lib/db";
import { userForgotPasswordSchema } from "@/lib/validations/user";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  try {
    const json = await request.json();
    const { email } = userForgotPasswordSchema.parse(json);

    const user = await db.user.findFirst({
      where: {
        email: email,
      },
      select: {
        name: true,
        email: true,
      },
    });

    // user doesn't exist but don't let the client know
    if (!user) {
      return NextResponse.json(
        {
          message:
            "If this email exists in our system, you should receive a password reset email.",
        },
        {
          status: 200,
        }
      );
    }

    const expiry = dayjs().add(6, "hours").toDate();

    const createdResetPasswordRequest = await db.resetPasswordRequest.create({
      data: {
        email: email,
        expires: expiry,
      },
    });

    const resetLink = `${env.BASE_URL}/auth/password-reset/${createdResetPasswordRequest.id}`;

    await resend.emails.send({
      from: siteConfig.email,
      to: email,
      subject: "Reset your password",
      react: ForgotPasswordEmail({ link: resetLink }),
    });

    return NextResponse.json(
      {
        message:
          "If this email exists in our system, you should receive a password reset email",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong, please try again later.",
      },
      {
        status: 500,
      }
    );
  }
};
