import { globalStyle, style, globalKeyframes } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1400px",
  width: "100%",
  margin: "40px auto 0",
  padding: "0 48px 56px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      padding: "0 28px 56px",
    },
  },
});

globalStyle(`${container} a`, {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    textDecorationThickness: 1,
    borderRadius: "2px",
    position: "relative",
});

export const leftSection = style({
  maxWidth: "100%",
});

export const h1 = style({
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  lineHeight: 1.3,
  marginBottom: "24px",
  textAlign: "center",
});

export const rightSection = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const box = style({
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    "@media": {
        "screen and (max-width: 768px)": {
            marginBottom: "48px",
        },
    },
});
