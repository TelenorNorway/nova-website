import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "center",
});

export const h1 = style({
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  lineHeight: 1.3,
  marginBottom: 24,
});

export const blogClass = style({
  marginBottom: 32,
  width: "100%",
});
