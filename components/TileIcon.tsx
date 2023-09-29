import type { TileType } from "../utils/courses";
import {
  ActiveBookSvg,
  ActiveDumbbellSvg,
  ActiveTreasureSvg,
  ActiveTrophySvg,
  CheckmarkSvg,
  FastForwardSvg,
  GoldenBookSvg,
  GoldenDumbbellSvg,
  GoldenTreasureSvg,
  GoldenTrophySvg,
  LockedBookSvg,
  LockedDumbbellSvg,
  LockedTreasureSvg,
  LockedTrophySvg,
  LockSvg,
  StarSvg,
} from "./Svgs";
import { TileStatus } from "./tileStatus";

export const TileIcon = ({
  tileType,
  status,
}: {
  tileType: TileType;
  status: TileStatus;
}): JSX.Element => {
  switch (tileType) {
    case "star":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <LockSvg />
      );
    case "book":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      );
    case "dumbbell":
      return status === "COMPLETE" ? (
        <GoldenDumbbellSvg />
      ) : status === "ACTIVE" ? (
        <ActiveDumbbellSvg />
      ) : (
        <LockedDumbbellSvg />
      );
    case "fast-forward":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <FastForwardSvg />
      );
    case "treasure":
      return status === "COMPLETE" ? (
        <GoldenTreasureSvg />
      ) : status === "ACTIVE" ? (
        <ActiveTreasureSvg />
      ) : (
        <LockedTreasureSvg />
      );
    case "trophy":
      return status === "COMPLETE" ? (
        <GoldenTrophySvg />
      ) : status === "ACTIVE" ? (
        <ActiveTrophySvg />
      ) : (
        <LockedTrophySvg />
      );
  }
};
