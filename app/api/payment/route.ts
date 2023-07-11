import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

import { env } from "@/env.mjs";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { createContactSchema } from "@/lib/validations/contact";

export const GET = async (request: NextRequest) => {
  try {
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

    const payload = {
      data: {
        type: "checkouts",
        checkout_options: {
          embed: true,
        },
        attributes: {
          checkout_data: {},
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: "33603",
            },
          },
          variant: {
            data: {
              type: "variants",
              id: "95002",
            },
          },
        },
      },
    };

    const response = await axios.post(
      "https://api.lemonsqueezy.com/v1/checkouts",
      payload,
      {
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${env.LEMON_SQUEEZY_API_KEY}`,
          "Content-Type": "application/vnd.api+json",
        },
      }
    );

    console.log({ response: response.data.data });

    return NextResponse.json(
      {
        url: response.data.data.attributes.url,
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
