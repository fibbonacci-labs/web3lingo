import { TileTooltipLeftOffset, tileTooltipLeftOffsets } from "../pages/wallets";


export const getTileTooltipLeftOffset = ({
  index, unitNumber, tilesLength,
}: {
  index: number;
  unitNumber: number;
  tilesLength: number;
}): TileTooltipLeftOffset => {
  if (index >= tilesLength - 1) {
    return tileTooltipLeftOffsets[0];
  }

  const offsets = unitNumber % 2 === 1
    ? tileTooltipLeftOffsets
    : [
      ...tileTooltipLeftOffsets.slice(4),
      ...tileTooltipLeftOffsets.slice(0, 4),
    ];

  return offsets[index % offsets.length] ?? tileTooltipLeftOffsets[0];
};
