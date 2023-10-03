import { Unit } from "@/utils/courses";

import { GuidebookSvg } from "./Svgs";

export const UnitHeader = ({ unit }: { unit: Unit }) => {
  return (
    <article
      className={[
        "max-w-2xl text-white sm:rounded-xl",
        unit.backgroundColor,
      ].join(" ")}
    >
      <header className="flex items-center justify-between gap-4 p-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">{unit.title}</h2>
          <p className="text-lg">{unit.description}</p>
        </div>
        {/* <Link
          href={``}
          className={[
            "flex items-center gap-3 rounded-2xl border-2 border-b-4 p-3 transition hover:text-gray-100",
            borderColor,
          ].join(" ")}
        >
          <GuidebookSvg />
          <span className="sr-only font-bold uppercase lg:not-sr-only">
            
          </span>
        </Link> */}
      </header>
    </article>
  );
};
