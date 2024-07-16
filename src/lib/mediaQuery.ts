import { useMediaQuery } from "react-responsive";

export const isSmall = useMediaQuery({
  query: "(max-width: 639px)",
  orientation: "landscape",
});

export const isMedium = useMediaQuery({
  query: "(min-width: 640px)",
  orientation: "landscape",
});

export const isLarge = useMediaQuery({
  query: "(min-width: 768px)",
  orientation: "landscape",
});

export const isExtraLarge = useMediaQuery({ query: "(min-width: 1024px)" });
