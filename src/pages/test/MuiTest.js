import * as React from 'react';
import {
  CssBaseline, InputAdornment, Stack, Toolbar,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeDark } from '../../components/ThemeDark';
import StyledSearchIcon from './styled/StyledSearchIcon';
import StyledAppBar from './styled/StyledAppBar';
import StyledMenuItem from './styled/StyledMenuItem';
import StyledOutlinedInput from './styled/StyledOutlinedInput';

export default function MuiTest() {
  // const theme = useTheme()

  const pages = ['Home', 'Browse', 'Details', 'Streams', 'Profile'];

  const styledImg = {
    width: '100%',
    img: {
      paddingRight: ThemeDark.spacing(4),
      borderRight: `1px solid ${ThemeDark.gray.dark}`,
      marginRight: ThemeDark.spacing(7),
    },
  };

  return (
    <ThemeProvider theme={ThemeDark}>
      <CssBaseline />
      <StyledAppBar
        elevation={0}
        position="static"
      >
        <Toolbar
          sx={styledImg}
          variant="dense"
        >
          <Stack direction="row">
            <img
              src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/logo.png"
              alt="logo"
            />
            <StyledOutlinedInput
              placeholder="Type Something"
              startAdornment={(
                <InputAdornment position="start">
                  <StyledSearchIcon />
                </InputAdornment>
                            )}
            />
          </Stack>
          <Stack direction="row">
            {pages.map((page) => (
              <StyledMenuItem key={page} textAlign="center">{page}</StyledMenuItem>))}
          </Stack>
        </Toolbar>
      </StyledAppBar>
    </ThemeProvider>
  );
}
