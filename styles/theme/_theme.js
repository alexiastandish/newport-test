import { colors } from "../_variables";

const base = {
  fg: colors.blue,
  bg: "#FFFFFF",
  header: colors.blue,
  subtext: colors.black,
  body: colors.black
};

const invert = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
  header: "#FFFFFF",
  subtext: "#FFFFFF",
  body: "#FFFFFF"
});

const lightGradient = ({ fg, header, subtext, body }) => ({
  fg,
  bg: "radial-gradient(rgb(255, 255, 255), rgb(224, 251, 252))",
  header,
  subtext,
  body
});

const transparentToGradient = ({ fg, header, subtext, body }) => ({
  fg,
  bg:
    "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(224,251,252,1) 50%, rgba(255,255,255,1) 100%)",
  header,
  subtext,
  body
});

export { base, invert, lightGradient, transparentToGradient };
