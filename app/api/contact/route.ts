import { NextRequest, NextResponse } from "next/server";

import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { createContactSchema } from "@/lib/validations/contact";

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

    const { name, email } = createContactSchema.parse(json);

    const response = await db.contact.create({
      data: {
        name: name,
        email: email,
        userId: session.user.id,
      },
    });

    return NextResponse.json(
      {
        message: "Contact created successfully.",
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
