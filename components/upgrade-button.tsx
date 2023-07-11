"use client";

import axios from "axios";

import { Button } from "@/components/ui/button";

export const UpgradeButton = () => {
  const handleClick = async () => {
    const response = await axios.get("/api/payment");

    const url = new URL(response.data.url);
    window.open(url);
  };

  return <Button onClick={handleClick}>Upgrade</Button>;
};
