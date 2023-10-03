import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Course } from "@prisma/client";

import { db } from "@/lib/db";
import Lesson from "@/components/lesson";

const getCourses = async () => {
  const courses: Course[] = await db.course.findMany();
  return courses;
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Course({ params }: PageProps) {
  const courses = await getCourses();
  const currentCourse = courses.find((course) => course.slug === params.slug);

  if (!currentCourse) {
    notFound();
  }

  return <Lesson course={currentCourse} />;
}
