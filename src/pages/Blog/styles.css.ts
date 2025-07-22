import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "0 48px 56px",
  maxWidth: "1400px",
  margin: "0 auto",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0 28px 56px",
    },
  },
});
