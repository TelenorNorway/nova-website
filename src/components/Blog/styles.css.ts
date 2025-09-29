import { style, globalStyle } from "@vanilla-extract/css";

export const subtext = style({
  fontSize: "2rem",
  lineHeight: 1.5,
  marginBottom: "16px",
});

export const img = style({
  maxWidth: "70%",
  height: "auto",
  margin: "0 auto 24px",
  display: "block",
});

export const blogText = style({
  fontSize: "1.125rem",
  maxWidth: "70ch",
  margin: "0 auto 16px",
});

export const truncate = style({
  maxHeight: "250px",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const metadata = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: "16px",
});

export const date = style({
  display: "block",
  fontSize: "0.75rem",
  float: "right",
});

export const readMore = style({
  textDecoration: "underline",
  textDecorationStyle: "dotted",
  textDecorationThickness: 1,
});

globalStyle(`${blogText} p`, {
  margin: "revert",
});

globalStyle(`${blogText} ul`, {
  listStyle: "disc",
  marginLeft: 25,
});

export const authorBox = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "16px 0",
  marginRight: "16px",
  gap: "12px",
});

export const authorImage = style({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

export const authorDetails = style({
  display: "flex",
  flexDirection: "column",
  fontSize: "0.875rem",
  lineHeight: 1.4,
  color: "var(--text-secondary)",
});

export const authorName = style({
  fontSize: "0.95rem",
  fontWeight: 600,
  textDecoration: "underline",
  textDecorationStyle: "dotted",
  textDecorationThickness: 1,
});
