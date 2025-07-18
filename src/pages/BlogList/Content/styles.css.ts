import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
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

export const h1 = style({
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  lineHeight: 1.3,
  marginBottom: "24px",
});

export const subtext = style({
    fontSize: "1.2rem",
    lineHeight: 1.5,
    marginBottom: "32px",
});

export const img = style({
    maxWidth: "70%",
    height: "auto",
    margin: "0 auto 24px",
    display: "block",
});

export const blogText = style({
    maxHeight: "250px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: "16px",
});

export const date = style({
    display: "block",
    fontSize: "0.75rem",
    float: "right",
});

export const readMore = style({
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    textDecorationThickness: 1,
});

globalStyle(`${blogText} p`, {
    margin: "revert"
});
