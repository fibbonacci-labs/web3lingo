import React from "react";
import { useBoundStore } from "../hooks/useBoundStore";
import { LockedLeaderboardsSvg } from "./Svgs";

export const UnlockLeaderboardsSection = () => {
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);

  if (lessonsCompleted >= 10) {
    return null;
  }

  const lessonsNeededToUnlockLeaderboards = 10 - lessonsCompleted;

  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 text-gray-700">
      <h2 className="text-xl font-bold">Unlock Leaderboards!</h2>
      <div className="flex items-center gap-6">
        <LockedLeaderboardsSvg />
        <p className="text-sm leading-6 text-gray-500">
          Complete {lessonsNeededToUnlockLeaderboards} more lesson
          {lessonsNeededToUnlockLeaderboards === 1 ? "" : "s"} to start
          competing
        </p>
      </div>
    </article>
  );
};
