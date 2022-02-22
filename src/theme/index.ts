import { ThemeProps } from '../types/theme';

export const theme: ThemeProps = {
  colors: {
    primary: 'hsl(322, 100%, 66%)',
    veryPaleCyan: 'hsl(193, 100%, 96%)',
    veryDarkCyan: 'hsl(192, 100%, 9%)',
    grayishBlue: 'hsl(208, 11%, 55%)',
  },
  heading: {
    font: '"Poppins", sans-serif',
    weight: '600',
  },
  body: {
    font: '"Open Sans", sans-serif',
    weight: {
      default: '400',
      large: '700',
    },
  },
};
