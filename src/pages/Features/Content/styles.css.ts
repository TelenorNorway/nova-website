import { globalStyle, style } from "@vanilla-extract/css";

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
    width: "100%",
    borderRadius: "8px",
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

export const contentContainer = style({
    display: "flex",
    gap: "24px",
    maxWidth: "100%",
    width: "100%",
    margin: "16px auto",
    "@media": {
        "screen and (max-width: 768px)": {
            flexDirection: "column",
        },
    },
});

export const drawer = style({
  flex: 1,
  maxWidth: "100%",
  padding: 0,
  overflow: "hidden",
  marginBottom: "12px",
  transition: "box-shadow 0.2s",
  borderBottom: "1px solid rgba(255,255,255,0.6)",
  selectors: {
    '&.drawer-expandable': {
      padding: 0,
    },
  },
  ":last-child": {
    borderBottom: "none",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "16px",
    },
  },
});

// Drawer toggle button
globalStyle(`.drawer-toggle`, {
  width: "100%",
  background: "none",
  border: "none",
  outline: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1.2rem",
  fontWeight: 600,
  padding: "8px 16px 16px 8px",
  color: "var(--text)",
  borderRadius: "12px 12px 0 0",
  transition: "background 0.2s",
});

globalStyle(`.drawer-title`, {
  flex: 1,
  textAlign: "left",
});

globalStyle(`.drawer-arrow`, {
  marginLeft: "12px",
  fontSize: "1.1em",
  transition: "transform 0.2s",
});

globalStyle(`.drawer-expandable.open .drawer-arrow`, {
  transform: "rotate(180deg)",
});

globalStyle(`.drawer-content`, {
  width: "100%",
  padding: "16px 16px 32px 16px",
  boxSizing: "border-box",
  borderRadius: "0 0 12px 12px",
  transition: "opacity 0.2s, padding 0.2s",
});

export const leftPanel = style({
    width: "50%",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
});

export const rightPanel = style({
    width: "50%",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
});

export const plus = style({
    color: "#ecf0f1",
    width: "30px",
    height: "30px",
    border: 0,
    fontSize: "1.5em",
    position: "relative",
});

export const plusSymbol = style([
    {
        position: "absolute",
        transition: "300ms",
        background: "white",
        borderRadius: "2px",
    },
    {
        selectors: {
            "&:first-child": {
                top: "25%",
                bottom: "25%",
                width: "10%",
                left: "45%",
            },
            "&:last-child": {
                left: "25%",
                right: "25%",
                height: "10%",
                top: "45%",
            },
        },
    },
]);

export const plusSymbolActive = style({
    transform: "rotate(90deg)",
    ":last-child": {
        left: "50%",
        right: "50%",
    },
});
