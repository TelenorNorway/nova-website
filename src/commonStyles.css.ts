import { style } from "@vanilla-extract/css";

export const glassmorphicBox = style({
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "16px",
    padding: "24px",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
});
