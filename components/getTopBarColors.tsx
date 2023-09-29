import { units } from "../utils/courses";

export const getTopBarColors = (
  scrollY: number
): {
  backgroundColor: `bg-${string}`;
  borderColor: `border-${string}`;
} => {
  const defaultColors = {
    backgroundColor: "bg-[#7E22CE]",
    borderColor: "border-[#46a302]",
  } as const;

  if (scrollY < 680) {
    return defaultColors;
  } else if (scrollY < 1830) {
    return units[1] ?? defaultColors;
  } else {
    return units[2] ?? defaultColors;
  }
};
