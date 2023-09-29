import { useState } from "react";
import Link from "next/link";

import courses from "../utils/courses";
import { ThemeIcon } from "./Flag";
import { ChevronDownSvg } from "./Svgs";

export const CourseDropDown = () => {
  const [coursesShown, setCoursesShown] = useState(false);
  return (
    <div
      className="relative hidden cursor-pointer items-center md:flex"
      onMouseEnter={() => setCoursesShown(true)}
      onMouseLeave={() => setCoursesShown(false)}
      aria-haspopup={true}
      aria-expanded={coursesShown}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setCoursesShown((isShown) => !isShown);
        }
      }}
    >
      <span className="text-md uppercase">English</span> <ChevronDownSvg />
      {coursesShown && (
        <ul className="absolute right-0 top-full grid w-[500px] grid-cols-2 rounded-2xl border-2 border-gray-200 bg-white p-6 font-light text-gray-600">
          {courses.map((course) => {
            return (
              <li key={course.name}>
                <Link
                  href={`/`}
                  tabIndex={0}
                  className="flex items-center gap-3 whitespace-nowrap rounded-xl p-3 hover:bg-gray-300"
                >
                  <ThemeIcon course={course} width={24} />
                  {course.description}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
