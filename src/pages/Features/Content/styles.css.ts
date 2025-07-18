import { globalStyle, style } from "@vanilla-extract/css";

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

export const mainSection = style({
    flex: 1,
    maxWidth: "100%",
});

globalStyle(`${mainSection} a`, {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    textDecorationThickness: 1,
    borderRadius: "2px",
    position: "relative",
});

globalStyle(`${mainSection} p`, {
    margin: "revert",
});

globalStyle(`${mainSection} ol`, {
    listStyle: "auto",
    marginLeft: "1.5em",
});

globalStyle(`${mainSection} img`, {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
});

globalStyle(`${mainSection} ul, ${mainSection} li`, {
    listStyle: "disc",
    marginLeft: "1.5em",
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

export const footnote = style({
    fontSize: "0.875rem",
    lineHeight: 1.5,
    textAlign: "center",
});

export const contactUs = style({
  background: "var(--blue)",
  border: "none",
  padding: "16px 32px",
  borderRadius: "25px",
  fontSize: "1rem",
  fontWeight: 600,
  color: "var(--light)",
  cursor: "pointer",
  transition: "all 0.25s",
  selectors: {
    "&:hover": {
      opacity: 0.85,
    },
  },
});
