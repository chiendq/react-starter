import {
  Avatar,
  Box, Fade,
  InputAdornment, Menu, MenuItem,
  OutlinedInput,
  Stack,
  styled,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import ThemeDark from "../../../components/ThemeDark";
import {Data} from "../Data";
import {Link, useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import themeDark from "../../../components/ThemeDark";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:900px)');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickMenuIcon = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    handleNavigatePage(e)
  };

  const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: '#1f2122',
    position: 'sticky',
    height: '100%',
    padding: '15px 0px',
  }));

  const StyledToolBar = styled(Toolbar)(({theme}) => ({
    width: '100%',
    height: 'inherit',
    'a': {
      width: 270,
      marginRight: '5%',
      flexBasis: '50%',
      borderRight: '1px solid #27292a'
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0
    },
    '@media (max-width: 1200px)': {
      'a': {
        borderRight: 'none',
        width: 191,
        height: 50,
      },
    },
  }));

  const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    backgroundColor: '#27292a',
    borderRadius: '25px',
    height: 46,
    fontSize: '16px',
    width: 'fit-content',
    input: {
      '&::placeholder': {
        fontSize: 14,
        fontWeight: 200,
      },
    },
  }));

  const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
    color: theme.gray.base,
    width: 24,
    height: 24,
    fontWeight: 'bold',
  }));

  const StyledAvatar = styled(Avatar)(({theme}) => ({
    borderRadius: '100%',
    justifyContent: 'flex-start',
    height: '40px',
    width: '40px',
    marginRight: theme.spacing(1),
  }));

  const StyledNavBarItem = styled(Typography)(({ theme }) => ({
    padding: '13px 20px',
    color: theme.gray.base,
    fontSize: 16,
    letterSpacing: '.3px',
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: theme.hover.pink,
    },
    [theme.breakpoints.down(1200)]: {

    },
  }));

  const StyledAvatarStack = styled(Stack)(() => ({
    flexDirection: 'row',
    backgroundColor: `${ThemeDark.gray.dark}`,
    borderRadius: 25,
    alignItems: 'center',
    ":hover": {
      backgroundColor: `${ThemeDark.hover.pink}`,
      'p':{
        color: `${ThemeDark.white.base}`,
      }
    },
  }));

  const handleCurrentPage = (route) => {
    return (location.pathname === route) ?
      ThemeDark.pink.base :
      ThemeDark.gray.base;
  }

  const handleNavigatePage = (e) => {
    navigate(e.target.id)
  }

  const MenuItemList = ()=>{
    return (
      Data.pages.map((page) => (
          <StyledNavBarItem
            id={page.route}
            onClick={handleNavigatePage}
            key={page.name}
            sx={{color: `${handleCurrentPage(page.route)}`}}
            textAlign="center">
            {page.name}
          </StyledNavBarItem>
        )
      ))
  }

  const renderHeader = () => {
    return(
      <StyledAppBar elevation={0} position="static">
        <StyledToolBar variant="dense">
          <Stack direction={"row"} alignItems={"center"}>
            <a href="/">
              <img
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/logo.png"
                alt="logo"/>
            </a>
            <StyledOutlinedInput
              placeholder="Type Something"
              startAdornment={(
                <InputAdornment position="start">
                  <StyledSearchIcon/>
                </InputAdornment>
              )}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            flex={1}
          >
            <MenuItemList/>
            <StyledAvatarStack>
              <StyledNavBarItem>Profile</StyledNavBarItem>
              <StyledAvatar
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/profile-header.jpg"
                alt="avatar"
              />
            </StyledAvatarStack>
          </Stack>
        </StyledToolBar>
      </StyledAppBar>)
  };

  const renderMobileHeader = () => {
    return(
      <Box>
        <AppBar
          sx={{
            backgroundColor: themeDark.white.base,
            padding: 1,
            height: 80,
            justifyContent: 'center',
        }}>
          <Toolbar sx={{justifyContent: 'space-between'}}>
            <Link to={'/'}>
              <img
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/logo.png"
                alt="logo"/>
            </Link>
            <MenuIcon
              fontSize={"large"}
              onClick={handleClickMenuIcon}
              sx={{
                color: themeDark.pink.base,
                cursor: 'pointer',
              }}
            />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              PaperProps={{
                style: {
                  width: '100%',
                  marginTop: 22,
                  border: 'none',
                  '& ul':{
                    padding: 0
                  }
                },
              }}
            >
              <Stack
                sx={{
                  alignItems: 'center',
                  'li':{
                    width: '100%',
                    height: 60,
                  },
                }}>
                {Data.pages.map((page)=>
                  <MenuItem
                    sx={{
                      color: `${handleCurrentPage(page.route)}`,
                      borderBottom: '1px solid #eeeeee',
                      justifyContent: 'center',
                    }}
                    id={page.route}
                    key={page.name}
                    onClick={handleClose}
                  >{page.name}
                  </MenuItem>
                )}
              </Stack>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }

  return isMobile ? renderMobileHeader() : renderHeader()
}