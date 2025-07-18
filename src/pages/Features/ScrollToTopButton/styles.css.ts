import { style } from "@vanilla-extract/css";

export const link = style({
  transition: "opacity 0.5s ease",
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  padding: "0.75rem 1rem",
  fontSize: "1rem",
  borderRadius: "50%",
  border: "none",
  background: "linear-gradient(135deg, #121b64 0%, #7a2ff7 65%, #ff007a 100%);",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  zIndex: 1000,
});
