import type { Course } from "@prisma/client";

import { db } from "@/lib/db";
import { Journey } from "@/components/Journey";
import { RightBar } from "@/components/RightBar";

const getCourses = async () => {
  const courses: Course[] = await db.course.findMany({
    include: {
      units: {
        include: {
          subUnits: true,
        },
      },
    },
  });
  return courses;
};

export default async function DashboardPage() {
  const courses = await getCourses();
  return (
    <div className="flex w-full gap-2">
      <Journey courses={courses} />
      <RightBar />
    </div>
  );
}
