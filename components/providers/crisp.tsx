"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

import { env } from "@/env.mjs";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(env.NEXT_PUBLIC_CRISP_WEBSITE_ID as string);
  });

  return null;
};

export default CrispChat;
