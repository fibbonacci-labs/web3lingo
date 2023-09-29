"use client";

import React, { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";

import { useBoundStore } from "@/hooks/useBoundStore";

import { Calendar } from "./Calendar";
import { DailyQuestsSection } from "./DailyQuestsSection";
import { LeaderboardRankSection } from "./LeaderboardRankSection";
import {
  EmptyFireSvg,
  EmptyGemSvg,
  FireSvg,
  GemSvg,
  LingotsTreasureChestSvg,
} from "./Svgs";
import { UnlockLeaderboardsSection } from "./UnlockLeaderboardsSection";
import { XpProgressSection } from "./XpProgressSection";

export const RightBar = () => {
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);

  return (
    <aside className="sticky top-0 hidden w-96 flex-col gap-6 self-start py-5 sm:flex">
      {lessonsCompleted < 10 ? (
        <UnlockLeaderboardsSection />
      ) : lessonsCompleted >= 10 ? (
        <LeaderboardRankSection />
      ) : null}
      <DailyQuestsSection />
      <XpProgressSection />
    </aside>
  );
};
