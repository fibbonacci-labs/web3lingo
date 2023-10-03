import type { BoundStateCreator } from "@/hooks/useBoundStore";

import { defaultCourse, type Course } from "../utils/courses";

export type CourseSlice = {
  course: Course;
  setCourse: (newCourse: Course) => void;
};

export const createCourseSlice: BoundStateCreator<CourseSlice> = (set) => ({
  course: defaultCourse,
  setCourse: (newCourse: Course) => set({ course: newCourse }),
});
