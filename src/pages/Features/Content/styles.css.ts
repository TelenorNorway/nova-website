import { globalStyle, style, globalKeyframes } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
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

globalStyle(`${container} p`, {
    margin: "revert",
});

globalStyle(`${container} ol`, {
    listStyle: "auto",
    marginLeft: "1.5em",
});

globalStyle(`${container} img`, {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
});

globalStyle(`${container} ul, ${container} li`, {
    listStyle: "disc",
    marginLeft: "1.5em",
});

export const mainSection = style({
    flex: 1,
    maxWidth: "100%",
});

export const h1 = style({
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  lineHeight: 1.3,
  marginBottom: "24px",
});

export const section = style({
    marginBottom: "48px",
    "@media": {
        "screen and (max-width: 768px)": {
            marginBottom: "32px",
        },
    },
});
