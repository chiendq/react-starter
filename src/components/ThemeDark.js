import { createTheme } from '@mui/material';

const ThemeDark = createTheme({
  gray: {
    base: '#666666',
    light: '#a2a2a2',
    dark: '#27292a',
  },
  white: {
    base: '#ffffff',
  },
  pink: {
    base: '#e75e8d',
  },
  palette: {
    background: {
      default: '#1f2122',
    },
    text: {
      primary: '#ffffff',
      fontFamily: 'Poppins',
    },
  },
  hover: {
    pink: '#e75e8d',
  },
  typography: {
    fontFamily:`'Poppins', sans-serif`,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      sp: 9999,
    },
  }
});

export default ThemeDark;
