import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    white: "rgba(255, 255, 255, 1)",
    urban: "rgba(61, 99, 169, 1)",
    black: "rgba(43, 43, 43, 1)",
    graniteGray: "rgba(103, 103, 103, 1)",
    cultured: "rgba(244, 244, 244, 1)",
    deepPurple: "rgba(170, 34, 117, 1)",
    androidGreen: "rgba(173, 194, 47, 1)",
  },
  fonts: {
    heading: `canada-type-gibson`,
    body: `canada-type-gibson`,
    text: `canada-type-gibson`,
  },
  breakpoints: {
    sm: "40em",
    md: "74em",
    lg: "86em",
    xl: "94em",
    "2xl": "108em",
  },
});

export default theme;
