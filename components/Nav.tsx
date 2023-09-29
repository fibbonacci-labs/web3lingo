import React, { useState } from "react";
import Link from "next/link";

import { CurrentCourse } from "@/components/CurrentCourse";

export function NavBar() {
  return (
    <nav className="border-b-2 border-[#272727]  dark:bg-[#0F0F0F]">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 ">
        <Link href="/" className="flex items-center">
          🚀
          <span className="self-center whitespace-nowrap text-2xl font-semibold ">
            AprendiendoDeFi
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 ">
            {/*  <li>
            <a
              href="#"
              className="block rounded  py-2 pl-3 pr-4 md:bg-transparent md:p-0 "
              aria-current="page"
            >
              Home
            </a>
          </li> */}

            <CurrentCourse />
          </ul>
        </div>
      </div>
    </nav>
  );
}
