import { style, globalKeyframes } from "@vanilla-extract/css";

export const hero = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
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

export const heroCopy = style({
  maxWidth: "540px",
});

export const heroH1 = style({
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  lineHeight: 1.3,
  marginBottom: "24px",
});

export const ctaBtn = style({
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

export const heroIllus = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const shippy = style({
  height: "300px",
  position: "relative",
  cursor: "pointer",
  zIndex: 2,
});

export const codeSnippet = style({
  background: "#111827",
  padding: "24px 32px",
  borderRadius: "12px",
  fontFamily: '"Source Code Pro", monospace',
  fontSize: "1.05rem",
  marginTop: "48px",
  overflowX: "auto",
  display: "block",
});

export const floatingHeart = style({
  position: "absolute",
  left: 0,
  top: 0,
  pointerEvents: "none",
  zIndex: 10,
  animation: "floatHeart 1.4s cubic-bezier(.4,1.6,.6,1) forwards",
});

export const floatHeart = globalKeyframes("floatHeart", {
  "0%": {
    opacity: "0",
    transform: "translateY(0) scale(1) rotate(-10deg)",
  },
  "10%": {
    opacity: "1",
    transform: "translateY(-10px) scale(1.1) rotate(10deg)",
  },
  "30%": {
    transform: "translateY(-40px) scale(1.15) rotate(-8deg)",
  },
  "50%": {
    transform: "translateY(-80px) scale(1.1) rotate(8deg)",
  },
  "70%": {
    transform: "translateY(-120px) scale(1.05) rotate(-6deg)",
  },
  "90%": {
    opacity: "1",
    transform: "translateY(-160px) scale(1) rotate(6deg)",
  },
  "100%": {
    opacity: "0",
    transform: "translateY(-200px) scale(0.9) rotate(-10deg)",
  },
});
