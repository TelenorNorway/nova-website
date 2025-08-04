import { style } from "@vanilla-extract/css";

export const hero = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  maxWidth: "1400px",
  width: "100%",
  margin: "40px auto 0",
  "@media": {
    "screen and (max-width: 1200px)": {
      flexDirection: "column",
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
  display: "inline-block",
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
