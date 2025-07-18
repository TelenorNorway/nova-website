import { style } from '@vanilla-extract/css';


export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  maxWidth: "1400px",
  width: "100%",
  margin: "40px auto 0",
  padding: "0 48px 96px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      padding: "0 28px 56px",
    },
  },
});

export const features = style({
  display: "flex",
  gap: "24px",
  flexWrap: "nowrap",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const feature = style({
    background: 'rgba(255, 255, 255, 1)',
    color: 'black',
    textAlign: 'center',
    backdropFilter: 'blur(14px)',
    padding: '32px 24px',
    borderRadius: '18px',
    flex: 1,
});

export const featureIcon = style({
    fontSize: '2rem',
    marginBottom: '16px',
    background: 'var(--bg-grad)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
});

export const featureHeading = style({
    fontSize: '1.25rem',
    marginBottom: '8px',
});

export const featureParagraph = style({
    fontSize: '0.95rem',
    lineHeight: '1.45',
});
