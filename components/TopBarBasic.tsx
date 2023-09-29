import React, { useState } from "react";
import Link from "next/link";

export const TopBar = ({
  backgroundColor,
  borderColor,
}: {
  backgroundColor?: `bg-${string}`;
  borderColor?: `border-${string}`;
}) => {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between border-b  p-4">
        <Link href="/" className="flex items-center">
          🚀
          <span className="self-center whitespace-nowrap text-2xl font-semibold ">
            Web3lingo
          </span>
        </Link>
      </div>
    </header>
  );
};
