import { useEffect, useState } from "react";

const screens = {
  xxs: "320px",
  xs: "375px",
  sm: "425px",
  phone: "480px",
  tablet: "600px",
  md: "768px",
  desktop: "1024px",
  xl: "1280px",
  "2xl": "1440px",
  "3xl": "1920px",
};

export type ScreenSizes = keyof typeof screens;

export const useMediaQuery = (min: ScreenSizes, max?: ScreenSizes): boolean => {
  const [matches, setMatches] = useState(
    window.matchMedia(
      `(min-width: ${screens[min]}) ${
        max ? `and (max-width: calc(${screens[max]} - 1px))` : ""
      }`
    ).matches
  );

  useEffect(() => {
    window
      .matchMedia(
        `(min-width: ${screens[min]}) ${
          max ? `and (max-width: calc(${screens[max]} - 1px))` : ""
        }`
      )
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return matches;
};
