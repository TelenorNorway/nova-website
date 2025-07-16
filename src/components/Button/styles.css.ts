import { style, createVar } from '@vanilla-extract/css';


const buttonForegroundColor = '#070452';
const buttonBackgroundColor = '#42f0f0;';

export const button = style({
    padding: '11px 24px',
    maxHeight: 48,
    border: 'none',
    borderRadius: 50,
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',

    alignItems: 'center',
    justifyContent: 'center',
    color: buttonForegroundColor,
    backgroundColor: buttonBackgroundColor,
});

export const content = style({
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
});

