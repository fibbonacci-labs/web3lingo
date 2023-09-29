import type { BoundStateCreator } from "@/hooks/useBoundStore";

import courses, { currentInitialCourse, type Course } from "../utils/courses";

export type CourseSlice = {
  course: Course;
  setCourse: (newCourse: Course) => void;
};

export const createCourseSlice: BoundStateCreator<CourseSlice> = (set) => ({
  course: courses[currentInitialCourse],
  setCourse: (newCourse: Course) => set({ course: newCourse }),
});
