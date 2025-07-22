import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "0 48px 56px",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0 28px 56px",
    },
  },
});
