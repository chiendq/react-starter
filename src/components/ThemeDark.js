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
});

export default ThemeDark;
