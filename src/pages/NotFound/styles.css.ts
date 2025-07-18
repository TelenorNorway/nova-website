import { style } from '@vanilla-extract/css';

const light = "#ffffff";

export const container = style({
    fontFamily: "Inter, sans-serif",
    color: light,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: `
    /* 1. Magenta flare in the bottom‑left */
    radial-gradient(
      circle at 0% 100%,           /* anchor bottom‑left */
      #d21cdd 0%,                  /* vivid magenta center */
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
      #140a56 0%,
      #1d1aa6 35%,
      #453adf 100%
    )
    `,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
});
