import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 40,
  marginBottom: 56,
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      marginTop: 0,
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
    display: "flex !important",
    flexDirection: "column",
    gap: "16px",
    "@media": {
        "screen and (max-width: 768px)": {
            marginBottom: "48px",
        },
    },
});

export const logoAndText = style({
    display: "flex",
    alignItems: "center",
    gap: "24px",
});

export const logo = style({
    width: 48,
    textAlign: "center",
});

export const text = style({
    flex: 1,
});

export const workWithUs = style({
    marginTop: "32px",
    textAlign: "center",
});

export const intro = style({
    textAlign: "center",
    marginBottom: "32px",
});
