import { NextRequest, NextResponse } from "next/server";

import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { userProfileUpdateSchema } from "@/lib/validations/user";

export const POST = async (request: NextRequest) => {
  try {
    const json = await request.json();
    const session = await getSession();

    if (!session?.user.id) {
      return NextResponse.json(
        {
          error: "Not authorized",
        },
        {
          status: 401,
        }
      );
    }

    const { name } = userProfileUpdateSchema.parse(json);

    const response = await db.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        name: name,
      },
    });

    return NextResponse.json(
      {
        message: "Profile updated successfully.",
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
