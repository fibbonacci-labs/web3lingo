import React from "react";
import Link from "next/link";

import { useBoundStore } from "@/hooks/useBoundStore";
import { useLeaderboardRank } from "@/hooks/useLeaderboard";

import { BronzeLeagueSvg } from "./Svgs";

export const LeaderboardRankSection = () => {
  const xpThisWeek = useBoundStore((x) => x.xpThisWeek());
  const rank = useLeaderboardRank();
  const leaderboardLeague = "Bronze League";
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 text-gray-700">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{leaderboardLeague}</h2>
        <Link href="/leaderboard" className="font-bold uppercase text-blue-400">
          View league
        </Link>
      </div>
      <div className="flex gap-6">
        <BronzeLeagueSvg />
        <div className="flex flex-col gap-5">
          {rank !== null && (
            <p className="text-lg font-bold text-gray-700">
              {`You're ranked #${rank}`}
            </p>
          )}
          <p className="text-sm leading-6 text-gray-500">
            You earned {xpThisWeek} XP this week so far
          </p>
        </div>
      </div>
    </article>
  );
};
