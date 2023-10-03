import type { BoundStateCreator } from "@/hooks/useBoundStore";

import { units } from "../utils/courses";

export type LessonSlice = {
  lessonsCompleted: number;
  increaseLessonsCompleted: (by?: number) => void;
  jumpToUnit: (unitNumber: number) => void;
};

export const createLessonSlice: BoundStateCreator<LessonSlice> = (set) => ({
  lessonsCompleted: 0,
  increaseLessonsCompleted: (by = 1) =>
    set(({ lessonsCompleted }) => ({
      lessonsCompleted: lessonsCompleted + by,
    })),
  jumpToUnit: (unitNumber: number) =>
    set(({ lessonsCompleted }) => {
      const lessonsPerTile = 4;
      const totalLessonsToJumpToUnit = units
        .filter((unit) => unit.unitNumber < unitNumber)
        .map((unit) => unit.subUnits.length * lessonsPerTile)
        .reduce((a, b) => a + b, 0);
      return {
        lessonsCompleted: Math.max(lessonsCompleted, totalLessonsToJumpToUnit),
      };
    }),
});
