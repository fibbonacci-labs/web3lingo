"use-client";

import { Fragment, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getTileLeftClassName } from "@/lib/utils";
import { useBoundStore } from "@/hooks/useBoundStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HoverLabel } from "@/components/HoverLabel";
import { TileIcon } from "@/components/TileIcon";
import { tileStatus } from "@/components/tileStatus";
import { UnitHeader } from "@/components/UnitHeader";

import type { Unit } from "../utils/courses";
import { getTileColors } from "./getTileColors";
import { LessonCompletionSvg } from "./LessonCompletionSvg";
import { TileTooltip } from "./TileTooltip";

export const UnitSection = ({ unit }: { unit: Unit }): JSX.Element => {
  const [selectedTile, setSelectedTile] = useState<null | number>(null);

  useEffect(() => {
    const unselectTile = () => setSelectedTile(null);
    window.addEventListener("scroll", unselectTile);
    return () => window.removeEventListener("scroll", unselectTile);
  }, []);

  const closeTooltip = useCallback(() => setSelectedTile(null), []);

  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);
  const increaseLessonsCompleted = useBoundStore(
    (x) => x.increaseLessonsCompleted
  );
  const increaseLingots = useBoundStore((x) => x.increaseLingots);

  return (
    <>
      <UnitHeader
        unitNumber={unit.unitNumber}
        description={unit.description}
        backgroundColor={unit.backgroundColor}
        borderColor={unit.borderColor}
      />
      <div className="relative mb-8 mt-[67px] flex max-w-2xl flex-col items-center gap-4">
        {unit.subtiles.map((tile, i): JSX.Element => {
          const status = tileStatus(tile, lessonsCompleted);
          console.log(status);
          return (
            <Fragment key={i}>
              {(() => {
                switch (tile.type) {
                  case "star":
                  case "book":
                  case "dumbbell":
                  case "trophy":
                  case "fast-forward":
                    if (tile.type === "trophy" && status === "COMPLETE") {
                      return (
                        <div className="relative">
                          <TileIcon tileType={tile.type} status={status} />
                          <div className="absolute left-0 right-0 top-6 flex justify-center text-lg font-bold text-yellow-700">
                            {unit.unitNumber}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <Card
                        className={[
                          "relative -mb-4 w-9/12 cursor-pointer shadow-sm",
                          status === "LOCKED" ? "bg-gray-100" : "bg-white",
                          getTileLeftClassName({
                            index: i,
                            unitNumber: unit.unitNumber,
                            tilesLength: unit.subtiles.length,
                          }),
                        ].join(" ")}
                        onClick={() => {
                          if (
                            tile.type === "fast-forward" &&
                            status === "LOCKED"
                          ) {
                            // void router.push(
                            //   `/lesson?fast-forward=${unit.unitNumber}`
                            // );
                            return;
                          }
                          setSelectedTile(i);
                        }}
                      >
                        {tile.type === "fast-forward" && status === "LOCKED" ? (
                          <HoverLabel
                            text="Jump here?"
                            textColor={unit.textColor}
                          />
                        ) : selectedTile !== i && status === "ACTIVE" ? (
                          <HoverLabel
                            text="Empieza"
                            textColor={unit.textColor}
                          />
                        ) : null}

                        <div className={["m-3 flex  p-4 "].join(" ")}>
                          <TileIcon tileType={tile.type} status={status} />
                          <p className="px-2 font-bold">{tile.description}</p>
                          <span className="sr-only">Show lesson</span>
                        </div>
                      </Card>
                    );
                  case "treasure":
                    return (
                      <div
                        className={[
                          "relative -mb-4",
                          getTileLeftClassName({
                            index: i,
                            unitNumber: unit.unitNumber,
                            tilesLength: unit.subtiles.length,
                          }),
                        ].join(" ")}
                        onClick={() => {
                          if (status === "ACTIVE") {
                            increaseLessonsCompleted(4);
                            increaseLingots(1);
                          }
                        }}
                        role="button"
                        tabIndex={status === "ACTIVE" ? 0 : undefined}
                        aria-hidden={status !== "ACTIVE"}
                        aria-label={status === "ACTIVE" ? "Collect reward" : ""}
                      >
                        {status === "ACTIVE" && (
                          <HoverLabel text="Open" textColor="text-yellow-400" />
                        )}
                        <TileIcon tileType={tile.type} status={status} />
                      </div>
                    );
                }
              })()}
              <TileTooltip
                selectedTile={selectedTile}
                index={i}
                unitNumber={unit.unitNumber}
                tilesLength={unit.subtiles.length}
                description={(() => {
                  switch (tile.type) {
                    case "book":
                    case "dumbbell":
                    case "star":
                      return tile.description;
                    case "fast-forward":
                      return status === "LOCKED"
                        ? "Jump here?"
                        : tile.description;
                    case "trophy":
                      return `Unit ${unit.unitNumber} review`;
                    case "treasure":
                      return "";
                  }
                })()}
                status={status}
                closeTooltip={closeTooltip}
              />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
