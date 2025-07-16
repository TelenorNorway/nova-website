import { style } from '@vanilla-extract/css';

export const navbar = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 48px',
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto',
});

export const logo = style({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontWeight: 700,
    fontSize: '1.4rem',
});

export const logoIcon = style({
    height: '30px',
});

export const navLinks = style({
    display: 'flex',
    gap: '32px',
    fontWeight: 500,
});
