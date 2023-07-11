import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";
import { z } from "zod";

import { db } from "@/lib/db";
import { hashPassword } from "@/lib/utils";
import { userPasswordResetSchema } from "@/lib/validations/user";

export const POST = async (request: NextRequest) => {
  try {
    const json = await request.json();
    const { password, resetId } = userPasswordResetSchema.parse(json);

    const resetPasswordRequest = await db.resetPasswordRequest.findUnique({
      where: {
        id: resetId,
      },
    });

    if (!resetPasswordRequest) {
      return NextResponse.json(
        {
          error: "Invalid reset request.",
        },
        {
          status: 400,
        }
      );
    }

    const user = await db.user.findFirst({
      where: {
        email: resetPasswordRequest.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "Couldn't find an account for this email",
        },
        {
          status: 400,
        }
      );
    }

    if (dayjs().isAfter(resetPasswordRequest.expires)) {
      return NextResponse.json(
        {
          error: "This reset request has expired. Please request a new one.",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await hashPassword(password);

    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
        emailVerified: new Date(),
      },
    });

    await db.resetPasswordRequest.deleteMany({
      where: {
        email: resetPasswordRequest.email,
      },
    });

    return NextResponse.json(
      {
        message:
          "Password reset successfully. You can now login with your new password.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong, please try again later." + error,
      },
      {
        status: 500,
      }
    );
  }
};
