import React, { useRef } from "react";
import Link from "next/link";

import { useBoundStore } from "@/hooks/useBoundStore";

import courses from "../utils/courses";
import { ChevronLeftSvg, ChevronRightSvg } from "./Svgs";

declare global {
  interface Element {
    offsetLeft: number;
  }
}

const scrollCarousel = ({
  container,
  startIndexRef,
  endIndex,
}: {
  container: Element;
  startIndexRef: React.MutableRefObject<number>;
  endIndex: number;
}) => {
  const startIndex = startIndexRef.current;
  const startChild = container.children[startIndex];
  const endChild = container.children[endIndex];
  if (!startChild || !endChild) return;
  const startX = startChild.offsetLeft - container.offsetLeft;
  const endX = endChild.offsetLeft - container.offsetLeft;
  const startTime = Date.now();
  const intervalTime = 500;
  const endTime = Date.now() + intervalTime;
  const tick = () => {
    const nowTime = Date.now();
    if (nowTime >= endTime) {
      container.scrollTo(endX, 0);
      return;
    }
    const dx = ((nowTime - startTime) / intervalTime) * (endX - startX);
    container.scrollTo(startX + dx, 0);
    requestAnimationFrame(tick);
  };
  tick();
  startIndexRef.current = endIndex;
};

const scrollCarouselLeft = ({
  languagesContainer,
  startIndexRef,
  lastLanguageIndex,
}: {
  languagesContainer: React.MutableRefObject<HTMLDivElement | null>;
  startIndexRef: React.MutableRefObject<number>;
  lastLanguageIndex: number;
}) => {
  const container = languagesContainer.current;
  if (!container) return;
  const startIndex = startIndexRef.current;
  const endIndex =
    startIndex === 0 ? lastLanguageIndex : Math.max(0, startIndex - 2);
  scrollCarousel({ container, startIndexRef, endIndex });
};

const scrollCarouselRight = ({
  languagesContainer,
  startIndexRef,
  lastLanguageIndex,
}: {
  languagesContainer: React.MutableRefObject<HTMLDivElement | null>;
  startIndexRef: React.MutableRefObject<number>;
  lastLanguageIndex: number;
}) => {
  const container = languagesContainer.current;
  if (!container) return;
  const startIndex = startIndexRef.current;
  const endIndex =
    startIndex >= lastLanguageIndex
      ? 0
      : (startIndex + 2) % container.children.length;
  scrollCarousel({ container, startIndexRef, endIndex });
};

export const LanguageCarousel = () => {
  const setCourse = useBoundStore((x) => x.setCourse);

  const startIndexRef = useRef(0);
  const languagesContainer = useRef<null | HTMLDivElement>(null);
  const lastLanguageIndex = 19;
  return (
    <article className="absolute bottom-0 left-0 right-0 hidden h-20 items-center justify-center bg-[#0a4a82] text-white md:flex">
      <div className="flex w-full max-w-5xl justify-between">
        <button
          className="opacity-50"
          onClick={() =>
            scrollCarouselLeft({
              languagesContainer,
              startIndexRef,
              lastLanguageIndex,
            })
          }
        >
          <ChevronLeftSvg />
          <span className="sr-only">Scroll left</span>
        </button>
        <div
          className="flex items-center gap-6 overflow-x-hidden"
          ref={languagesContainer}
        >
          {courses.map((course) => {
            return (
              <Link
                key={course.slug}
                className="flex items-center gap-2"
                href={"/wallets"}
                onClick={() => setCourse(course)}
              >
               {/*  <ThemeIcon course={course} width={40} /> */}
                <span className="text-sm font-bold uppercase">
                  {course.title}
                </span>
              </Link>
            );
          })}
        </div>
        <button
          className="opacity-50"
          onClick={() =>
            scrollCarouselRight({
              languagesContainer,
              startIndexRef,
              lastLanguageIndex,
            })
          }
        >
          <ChevronRightSvg />
          <span className="sr-only">Scroll right</span>
        </button>
      </div>
    </article>
  );
};
