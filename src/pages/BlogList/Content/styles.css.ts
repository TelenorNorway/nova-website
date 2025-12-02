import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "96px 24px 128px",
  display: "flex",
  flexDirection: "column",
});

export const hero = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginBottom: "24px",
});

export const heroEyebrow = style({
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontSize: "0.85rem",
});

export const heroTitle = style({
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  lineHeight: 1.15,
  margin: 0,
});

export const heroDescription = style({
  fontSize: "1.1rem",
  maxWidth: "720px",
  margin: "0 auto",
  lineHeight: 1.6,
});

export const searchWrapper = style({
  position: "relative",
  width: "100%",
  maxWidth: "520px",
  margin: "24px auto 56px",
});

export const searchInput = style({
  width: "100%",
  padding: "16px 56px 16px 24px",
  borderRadius: "999px",
  border: "1px solid rgba(15, 23, 42, 0.15)",
  fontSize: "1rem",
  background: "rgba(255, 255, 255, 0.9)",
  boxShadow: "0 15px 60px rgba(15, 23, 42, 0.08)",
  color: "var(--text-primary, #0f172a)",
  outline: "none",
  transition: "border-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:focus-visible": {
      borderColor: "#2563eb",
      boxShadow: "0 15px 60px rgba(37, 99, 235, 0.25)",
    },
  },
});

export const searchButton = style({
  position: "absolute",
  top: "50%",
  right: "12px",
  transform: "translateY(-50%)",
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  border: "none",
  background: "#111827",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 15px 40px rgba(15, 23, 42, 0.18)",
  transition: "transform 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 20px 60px rgba(15, 23, 42, 0.25)",
    },
    "&:focus-visible": {
      outline: "2px solid #2563eb",
      outlineOffset: "2px",
    },
  },
});

export const tagFilters = style({
  width: "100%",
  maxWidth: "960px",
  margin: "0 auto 48px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const tagHeading = style({
  textTransform: "uppercase",
  fontSize: "0.85rem",
  letterSpacing: "0.1em",
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
});

export const tagButton = style({
  border: "1px solid rgba(15, 23, 42, 0.2)",
  borderRadius: "999px",
  padding: "10px 18px",
  background: "rgba(255, 255, 255, 0.75)",
  color: "var(--text-primary, #0f172a)",
  fontSize: "0.95rem",
  cursor: "pointer",
  transition: "background 150ms ease, color 150ms ease, border-color 150ms ease, box-shadow 150ms ease",
  selectors: {
    "&:hover": {
      borderColor: "#111827",
    },
    "&:focus-visible": {
      outline: "2px solid #2563eb",
      outlineOffset: "2px",
    },
  },
});

export const tagButtonActive = style({
  background: "#111827",
  color: "#fff",
  borderColor: "#111827",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.25)",
});

export const blogGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "40px 32px",
});

export const blogPreview = style({
  transition: "transform 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:hover, &:focus-visible": {
      transform: "translateY(-6px)",
      boxShadow: "0 30px 100px rgba(15, 23, 42, 0.12)",
    },
  },
});

export const blogImage = style({
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "18px",
  backgroundColor: "#f3f4f6",
});

export const previewContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const previewDate = style({
  fontSize: "0.9rem",
});

export const previewTitle = style({
  fontSize: "1.35rem",
  lineHeight: 1.4,
  margin: 0,
});

export const previewDescription = style({
  fontSize: "1rem",
  lineHeight: 1.6,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

globalStyle(`${blogPreview}:focus-visible`, {
  outline: "2px solid #2563eb",
  outlineOffset: "4px",
});

export const emptyState = style({
  textAlign: "center",
  fontSize: "1rem",
  marginTop: "24px",
});
