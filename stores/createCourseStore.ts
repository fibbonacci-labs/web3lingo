import type { BoundStateCreator } from "@/hooks/useBoundStore";

import { defaultCourse, type Unit } from "../utils/courses";

export type CourseSlice = {
  course: Unit;
  setCourse: (newCourse: Unit) => void;
};

export const createCourseSlice: BoundStateCreator<CourseSlice> = (set) => ({
  course: defaultCourse,
  setCourse: (newCourse: Unit) => set({ course: newCourse }),
});