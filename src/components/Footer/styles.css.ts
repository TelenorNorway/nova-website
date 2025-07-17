import { style } from '@vanilla-extract/css';

export const text = style({
  textAlign: "center",
  marginTop: "2rem",
  fontSize: "0.8rem",
  color: "rgba(255, 255, 255, 0.8)",
  lineHeight: "1.9",
});

export const links = style({
  fontSize: "0.7rem",
  color: "rgba(255, 255, 255, 0.8)",
  display: "inline-flex",
  gap: "0.7rem",
});
