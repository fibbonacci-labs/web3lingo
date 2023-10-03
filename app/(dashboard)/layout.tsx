import { redirect } from "next/navigation";
import type { Course } from "@/utils/courses";

import { appNavigation, routes } from "@/config/routes";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import CourseSwitcher from "@/components/course-switcher";
import { CurrentCourse } from "@/components/CurrentCourse";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-account-nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const getCourses = async () => {
  const coursesFromDb = await db.course.findMany();
  const courses: readonly Course[] = [...coursesFromDb];
  return courses;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getSession();
  const courses = await getCourses();

  if (!session) {
    return redirect(routes.main.signin);
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40">
        <div className="border-b bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <MainNav items={appNavigation.app} />
            <div className="flex flex-row items-center gap-4">
              <CourseSwitcher courses={courses} />
              <CurrentCourse />
              <UserNav
                name={session?.user?.name}
                email={session?.user?.email}
                image={session?.user?.image}
              />
            </div>
          </div>
        </div>
      </header>
      <div className="container grid">
        <main className="flex w-full flex-col overflow-hidden pt-4">
          {children}
        </main>
      </div>
    </div>
  );
}
