import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "40px auto 0",
  paddingBottom: 56,
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const leftSection = style({
    flex: 1,
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

export const featuresGrid = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridAutoRows: "1fr",
    gap: "24px",
    "@media": {
        "screen and (max-width: 768px)": {
            gridTemplateColumns: "1fr",
        },
    },
});
