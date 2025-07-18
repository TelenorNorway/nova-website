import { style, globalStyle } from "@vanilla-extract/css";

export const feature = style({
    display: "flex",
    gap: "16px",
    position: "relative",
    transition: "box-shadow 0.2s, top 0.2s",
    top: 0,
    ":hover": {
        boxShadow: "0 14px 40px rgba(0, 0, 0, 0.3)",
        top: -2,
    },
});

export const leftSection = style({
    width: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export const icon = globalStyle(`${leftSection} svg`, {
    width: "100%",
    height: "100%",
    strokeWidth: 1,
});

export const rightSection = style({
    flex: "1",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
});
