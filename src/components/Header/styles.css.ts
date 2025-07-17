import { style } from "@vanilla-extract/css";

export const navbar = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px 48px",
  maxWidth: "1400px",
  width: "100%",
  margin: "0 auto",
  "@media": {
    "screen and (max-width: 768px)": {
      justifyContent: "space-between",
      padding: "24px 28px",
    },
  },
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontWeight: 700,
  fontSize: "1.4rem",
});

export const logoIcon = style({
  height: "30px",
});

export const navLinks = style({
  display: "flex",
  gap: "32px",
  fontWeight: 500,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const hamburger = style({
  display: "none",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
    },
  },
  ":focus-visible": {
    outline: "2px solid crimson",
    borderRadius: "3px",
  },
});

/* NavMobile */ 
export const navMobile = style({
  display: 'block',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
});

export const navMobileMenu = style({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '5.5rem',
  padding: '1.25rem 1.25rem',
  background: '#0a0a0a',
  borderBottom: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
  zIndex: 100,
});

export const navMobileList = style({
  display: 'grid',
  gap: '0.5rem',
});

export const navMobileListItem = style({
  width: '100%',
  padding: '0.08rem',
  borderRadius: '0.75rem',
  background: 'linear-gradient(135deg, #27272a 0%, #0a0a0a 60%, #404040 100%)',
});

export const navMobileLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '1.25rem',
  borderRadius: '0.75rem',
  background: '#0a0a0a',
  color: 'inherit',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 400,
  transition: 'background 0.15s',
  selectors: {
    '&:hover': {
      background: '#18181b',
    },
  },
});

export const navMobileLinkTitle = style({
  display: 'flex',
  gap: '0.25rem',
  fontSize: '1.125rem',
});

export const navMobileLinkIcon = style({
  fontSize: '1.25rem',
});
