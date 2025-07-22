import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "40px auto 56px",
});

globalStyle(`${container} a`, {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    textDecorationThickness: 1,
    borderRadius: "2px",
    position: "relative",
});

export const h1 = style({
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  lineHeight: 1.3,
  marginBottom: "24px",
});

export const mainSection = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const shippy = style({
  height: "300px",
  position: "relative",
  cursor: "pointer",
  zIndex: 2,
});
