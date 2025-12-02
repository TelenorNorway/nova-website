import { style, fontFace } from "@vanilla-extract/css";

const light = "#ffffff";

const evolution = fontFace([
  {
    src: 'url("/font/TelenorEvolutionUI-Bold.woff2") format("woff2"), url("/font/TelenorEvolutionUI-Bold.woff") format("woff")',
    fontWeight: 700,
  },
  {
    src: 'url("/font/TelenorEvolutionUI-ExtraBoldSlanted.woff2") format("woff2"), url("/font/TelenorEvolutionUI-ExtraBoldSlanted.woff") format("woff")',
    fontWeight: 800,
    fontStyle: "italic",
  },
  {
    src: 'url("/font/TelenorEvolutionUI-Light.woff2") format("woff2"), url("/font/TelenorEvolutionUI-Light.woff") format("woff")',
    fontWeight: 300,
  },
  {
    src: 'url("/font/TelenorEvolutionUI-Medium.woff2") format("woff2"), url("/font/TelenorEvolutionUI-Medium.woff") format("woff")',
    fontWeight: 500,
  },
  {
    src: 'url("/font/TelenorEvolutionUI-Normal.woff2") format("woff2"), url("/font/TelenorEvolutionUI-Normal.woff") format("woff")',
    fontWeight: 400,
  },
]);

export const container = style({
  fontFamily: evolution,
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  color: light,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  background: `
    /* 1. Magenta flare in the bottom‑left */
    radial-gradient(
      circle at 0% 100%,           /* anchor bottom‑left */
      #00C8FF 0%,                  /* vivid magenta center */
      rgba(210, 28, 221, 0) 55%    /* fade to transparent */
    ),
    /* 2. Electric‑blue flare in the top‑right */
    radial-gradient(
      circle at 100% 0%,           /* anchor top‑right */
      #0085ff 0%,                  /* bright sky‑blue center */
      rgba(0, 133, 255, 0) 55%
    ),
    /* 3. Base sweep from deep indigo ➜ royal violet */
    linear-gradient(
      135deg,                      /* top‑left ➜ bottom‑right */
      #070452 0%,
      #1d1aa6 35%,
      #453adf 100%
    )
    `,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
});

export const innerContainer = style({
  padding: "0 48px 56px",
  maxWidth: "1400px",
  width: "100%",
  margin: "0 auto",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0 28px 56px",
    },
  },
});
