import { style } from '@vanilla-extract/css';

export const verticalCenter = style({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
});

export const header = style({
    display: 'flex',
    padding: '20px 0',
    width: '100%',
    gap: '72px',

    margin: '0 auto',
});

export const imgContainer = style({
  textAlign: 'center',
});

export const textContainer = style({
    maxWidth: 400,
});

export const headerItem = style({
    flex: 1,
});

export const img = style({
    maxHeight: 350,
});
