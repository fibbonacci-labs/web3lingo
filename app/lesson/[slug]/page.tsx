import type { Metadata } from "next";
import { notFound } from "next/navigation";
import courses from "@/utils/courses";

import Lesson from "@/components/lesson";

interface PageProps {
  params: { 
    slug: string;
  };
}

export default async function Course({ params }: PageProps) {
  console.log(params);
  const course = courses.find((course) => course.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <section>
      <Lesson course={course} />
    </section>
  );
}
