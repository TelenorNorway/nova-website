import { style, globalKeyframes } from "@vanilla-extract/css";

export const shippy = style({
  height: "300px",
  position: "relative",
  cursor: "pointer",
  zIndex: 2,
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
