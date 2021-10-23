import { createStitches } from '@stitches/core';

export const { css } = createStitches({
  theme: {
    colors: {
      text: '#333',
      primary: 'blue',
      onPrimary: 'white',
    },
    fontSizes: {
      1: '0.875rem',
      2: '1rem',
      3: '1.125rem',
      4: '1.5rem',
      5: '2rem',
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
