import * as React from 'react';
import {
  Avatar, Container,
  CssBaseline, InputAdornment, Stack, styled, Toolbar,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import StyledSearchIcon from './styled/StyledSearchIcon';
import StyledAppBar from './styled/StyledAppBar';
import StyledMenuItem from './styled/StyledMenuItem';
import StyledOutlinedInput from './styled/StyledOutlinedInput';
import ThemeDark from "../../components/ThemeDark";

export default function Mui() {
    // const theme = useTheme()

  const pages = ['Home', 'Browse', 'Details', 'Streams'];

  const styledLogo = {
    width: '100%',
    img: {
      // minWidth: '266px',
      width: 300,
      paddingRight: '80px',
      borderRight: `1px solid ${ThemeDark.gray.dark}`,
      marginRight: '65px',
    },
  };

  const StyledToolBar = styled(Toolbar)(()=>({
    width: '100%',
    height: 'inherit',
    '@media (min-width: 600px)':{
      padding: 0,
    },
  }));

  const StyledAvatar = styled(Avatar)(()=>({
    borderRadius: '100%',
    justifyContent: 'flex-start',
    height: '40px',
    width: '40px',
    margin: '0 8px 0 0',
  }));

  const StyledLeftToolBarStack = styled(Stack)(()=>({
    alignItems: 'center',
    flexDirection: 'row',
  }));

  const StyledAvatarStack = styled(Stack)(()=>({
    flexDirection: 'row',
    backgroundColor: `${ThemeDark.gray.dark}`,
    borderRadius: '25px',
    alignItems: 'center',
    ":hover":{
      backgroundColor: `${ThemeDark.hover.pink}`,
    }
  }));

  const CustomContainer = styled(Container)(()=>({
    '@media (min-width: 600px)':{
      padding: 0,
    }
  }));

  const StyledContainer = styled(CustomContainer)(()=>({
    width: '92%',
    maxWidth: '1300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&.MuiContainer-maxWidthLg': {
      maxWidth: '1550px',
    },
    '@media (min-width: 600px)':{
      padding: '30px 60px',
    }
  }));

  const StyledBodyContainer = styled(CustomContainer)(()=>({
    height: 2000,
    width: '100%',
    marginTop: 40,
    padding: '60px',
    backgroundColor: '#27292a',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 1200px)': {
      maxWidth: '1550px',
    },
    '@media (min-width: 600px)':{
      padding: 60,
    }
  }));

  const StyledBannerContainer = styled(CustomContainer)(()=>({
    height: 400,
    width: '100%',
    margin: 0,
    // padding: '80px 60px',
    backgroundColor: '#1f2122',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '25px',
    backgroundImage: 'url(https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/banner-bg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: 380,
    '&.MuiContainer-maxWidthLg': {
      maxWidth: '1550px',
    },

    '@media (min-width: 600px)':{
      // padding: 60,
    }

  }));


  return (
    <StyledContainer>
      <ThemeProvider theme={ThemeDark}>
        <CssBaseline />
        <StyledAppBar
          elevation={0}
          position="static"
        >
          <StyledToolBar
            sx={styledLogo}
            variant="dense"
          >
            <StyledLeftToolBarStack>
              <img src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/logo.png"
                alt="logo"/>
              <StyledOutlinedInput
                placeholder="Type Something"
                startAdornment={(
                  <InputAdornment position="start">
                    <StyledSearchIcon />
                  </InputAdornment>
                )}
              />
            </StyledLeftToolBarStack>
            <Stack
              direction="row"
              justifyContent="flex-end"
              flex={1}
            >
              {pages.map((page) => (
                <StyledMenuItem key={page} textAlign="center">{page}</StyledMenuItem>))}
              <StyledAvatarStack>
                <StyledMenuItem
                  sx={{
                    padding: '0 16px',
                    ":hover":{
                      color: `${ThemeDark.white.base}`,
                    },
                  }}
                  key="profile"
                  >Profile</StyledMenuItem>
                <StyledAvatar
                  src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/profile-header.jpg"
                  alt="avatar"
                />
              </StyledAvatarStack>
            </Stack>
          </StyledToolBar>
        </StyledAppBar>
      </ThemeProvider>
      <StyledBodyContainer>
        <StyledBannerContainer>

        </StyledBannerContainer>
      </StyledBodyContainer>
    </StyledContainer>
  );
}
