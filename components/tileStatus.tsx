import type { Tile } from "../utils/courses";
import { units } from "../utils/courses";

export type TileStatus = "LOCKED" | "ACTIVE" | "COMPLETE";

export const tileStatus = (
  tile: Tile,
  lessonsCompleted: number
): TileStatus => {
  const lessonsPerTile = 4;
  const tilesCompleted = Math.floor(lessonsCompleted / lessonsPerTile);
  const tiles = units.flatMap((unit) => unit.subUnits);
  const tileIndex = tiles.findIndex((t) => t === tile);
  if (tileIndex < tilesCompleted) {
    return "COMPLETE";
  }
  if (tileIndex > tilesCompleted) {
    return "LOCKED";
  }
  return "ACTIVE";
};
