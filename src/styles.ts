import { createCss } from '@stitches/core';

export const { css } = createCss({
  theme: {
    colors: {
      primary: 'blue',
      onPrimary: 'white',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '2rem',
    },
  },
});
