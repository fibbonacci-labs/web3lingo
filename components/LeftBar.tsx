"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useBoundStore } from "@/hooks/useBoundStore";

import type { Tab } from "./BottomBar";
import type { LoginScreenState } from "./LoginScreen";
import { LoginScreen } from "./LoginScreen";
import { GlobeIconSvg, LeftBarMoreMenuSvg, PodcastIconSvg } from "./Svgs";
import { useBottomBarItems } from "./useBottomBarItems";

export const LeftBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const logOut = useBoundStore((x) => x.logOut);

  const [moreMenuShown, setMoreMenuShown] = useState(false);
  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  const bottomBarItems = useBottomBarItems();

  return (
    <>
      <aside className="fixed bottom-0 left-0 top-0 hidden flex-col gap-5 border-r-2  p-3 md:flex lg:w-64 lg:p-5">
        <ul className="flex flex-col items-stretch gap-3">
          {bottomBarItems.map((item) => {
            return (
              <li key={item.href} className="flex flex-1">
                {item.name === selectedTab ? (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] px-2 py-1 text-sm font-bold uppercase text-blue-400"
                  >
                    {item.icon}{" "}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl px-2 py-1 text-sm font-bold uppercase text-gray-400 hover:bg-gray-100"
                  >
                    {item.icon}{" "}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
          {/* <div
            className="relative flex grow cursor-default items-center gap-3 rounded-xl py-1 px-2 font-bold uppercase text-gray-400 hover:bg-gray-100"
            onClick={() => setMoreMenuShown((x) => !x)}
            onMouseEnter={() => setMoreMenuShown(true)}
            onMouseLeave={() => setMoreMenuShown(false)}
            role="button"
            tabIndex={0}
          >
            <LeftBarMoreMenuSvg />{" "}
            <span className="hidden text-sm lg:inline">More</span>
            <div
              className={[
                "absolute left-full top-[-10px] min-w-[300px] rounded-2xl border-2 border-gray-300 bg-white text-left text-gray-400",
                moreMenuShown ? "" : "hidden",
              ].join(" ")}
            >
              <div className="flex flex-col py-2">
                <Link
                  className="flex items-center gap-4 py-2 px-5 text-left uppercase hover:bg-gray-100"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlobeIconSvg className="h-10 w-10" />
                  Schools
                </Link>
                <Link
                  className="flex items-center gap-4 py-2 px-5 text-left uppercase hover:bg-gray-100"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PodcastIconSvg className="h-10 w-10" />
                  Podcast
                </Link>
              </div>
              <div className="flex flex-col border-t-2 border-gray-300 py-2">
                {!loggedIn && (
                  <button
                    className="py-2 px-5 text-left uppercase hover:bg-gray-100"
                    onClick={() => setLoginScreenState("SIGNUP")}
                  >
                    Create a profile
                  </button>
                )}
                <Link
                  className="py-2 px-5 text-left uppercase hover:bg-gray-100"
                  href={loggedIn ? "/settings/account" : "/settings/sound"}
                >
                  Settings
                </Link>
                <Link
                  className="py-2 px-5 text-left uppercase hover:bg-gray-100"
                  href="https://support.duolingo.com/hc/en-us"
                >
                  Help
                </Link>
                {!loggedIn && (
                  <button
                    className="py-2 px-5 text-left uppercase hover:bg-gray-100"
                    onClick={() => setLoginScreenState("LOGIN")}
                  >
                    Sign in
                  </button>
                )}
                {loggedIn && (
                  <button
                    className="py-2 px-5 text-left uppercase hover:bg-gray-100"
                    onClick={logOut}
                  >
                    Sign out
                  </button>
                )}
              </div>
            </div>
          </div>  */}
        </ul>
      </aside>
      {/* <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      /> */}
    </>
  );
};
