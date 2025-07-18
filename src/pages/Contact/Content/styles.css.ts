import { globalStyle, style, globalKeyframes } from "@vanilla-extract/css";
import { text } from "stream/consumers";

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

export const box = style({
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "16px",
    padding: "24px",
    width: "400px",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
});

export const contactFormInput = style({
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    outline: "none",
    selectors: {
        "&::placeholder": {
            color: "rgba(255, 255, 255, 0.8)",
        },
    },
});

export const contactFormTextarea = style([
    contactFormInput,
]);

export const contactFormButton = style({
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s ease",
    selectors: {
        "&:hover": {
            background: "#0056b3",
        },
    },
});
