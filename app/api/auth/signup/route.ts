import { NextRequest, NextResponse } from "next/server";
import VerifyAccountEmail from "@/transactional/emails/verify-account-email";
import dayjs from "dayjs";
import { Resend } from "resend";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { db } from "@/lib/db";
import { generateId, hashPassword } from "@/lib/utils";
import { userSignupSchema } from "@/lib/validations/user";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  try {
    const json = await request.json();
    const { name, email, password } = userSignupSchema.parse(json);

    const userExists = await db.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userExists) {
      return NextResponse.json(
        {
          error: "This email is already registered.",
        },
        {
          status: 400,
        }
      );
    }

    const newUser = await db.user.create({
      data: {
        name: name,
        email: email,
        password: await hashPassword(password),
      },
    });

    const expiry = dayjs().add(3, "days").toDate();

    const verificationToken = await db.verificationToken.create({
      data: {
        identifier: newUser.id,
        token: generateId(16)(),
        expires: expiry,
      },
    });

    const verificationLink = `${env.NEXTAUTH_URL}/auth/verify-account/${verificationToken.token}`;
    
    await resend.emails.send({
      from: siteConfig.email,
      to: email,
      subject: "Verify your account",
      react: VerifyAccountEmail({ link: verificationLink }),
    });

    return NextResponse.json(
      {
        message:
          "Signup successful. Please check your email to verify your account.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error)
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
