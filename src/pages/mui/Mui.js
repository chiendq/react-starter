import * as React from 'react';
import {
  Avatar,
  Button,
  Container,
  CssBaseline, ImageList, ImageListItem,
  InputAdornment,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import StyledSearchIcon from './styled/StyledSearchIcon';
import StyledAppBar from './styled/StyledAppBar';
import StyledMenuItem from './styled/StyledMenuItem';
import StyledOutlinedInput from './styled/StyledOutlinedInput';
import ThemeDark from "../../components/ThemeDark";
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';

export default function Mui() {
  // const theme = useTheme()

  const pages = ['Home', 'Browse', 'Details', 'Streams'];

  const popularGame = [
    {
      title: 'Fortnite',
      type: 'Sandbox',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-01.jpg'
    },
    {
      title: 'Pubg',
      type: 'Battle S',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-02.jpg'
    },
    {
      title: 'Dota2',
      type: 'Steam-X',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg',
    },
    {
      title: 'CS-GO',
      type: 'Legendary',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-04.jpg',
    },
    {
      title: 'Mini Craft',
      type: 'Legendary',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-05.jpg',
    },
    {
      title: 'Eagles Fly',
      type: 'Matrix Games',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-06.jpg',
    },
    {
      title: 'Warface',
      type: 'Max 3D',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-07.jpg',
    },
    {
      title: 'Warcraft',
      type: 'Legend',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-08.jpg',
    },
  ]

  const yourGaming = [
    {
      title: 'Dota2',
      type: 'Sandbox',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-01.jpg',
      dateAdded: '24/08/2036',
      hoursPlayed: '634 H 22 Mins',
      currently: true
    },
    {
      title: 'Fortnite',
      type: 'Sandbox',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-02.jpg',
      dateAdded: '22/06/2036',
      hoursPlayed: '740 H 52 Mins',
      currently: false
    },
    {
      title: 'CS-GO',
      type: 'Sandbox',
      image: 'https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg',
      dateAdded: '21/04/2036',
      hoursPlayed: '892 H 14 Mins',
      currently: true
    },
  ]

  const StyledToolBar = styled(Toolbar)(() => ({
    width: '100%',
    height: 'inherit',
    '@media (min-width: 600px)': {
      padding: 0,
    },
    'img': {
      width: 300,
      paddingRight: '80px',
      borderRight: `1px solid ${ThemeDark.gray.dark}`,
      marginRight: '65px',
    },
  }));

  const StyledAvatar = styled(Avatar)(() => ({
    borderRadius: '100%',
    justifyContent: 'flex-start',
    height: '40px',
    width: '40px',
    margin: '0 8px 0 0',
  }));

  const StyledStack = styled(Stack)(() => ({
    width: '100%',
  }));

  const StyledLeftToolBarStack = styled(Stack)(() => ({
    alignItems: 'center',
    flexDirection: 'row',
  }));

  const StyledAvatarStack = styled(Stack)(() => ({
    flexDirection: 'row',
    backgroundColor: `${ThemeDark.gray.dark}`,
    borderRadius: '25px',
    alignItems: 'center',
    ":hover": {
      backgroundColor: `${ThemeDark.hover.pink}`,
      color: `${ThemeDark.white.base}`,
    },
  }));

  const CustomContainer = styled(Container)(() => ({
    borderRadius: '25px',
    '@media (min-width: 600px)': {
      padding: 0,
    }
  }));

  const StyledContainer = styled(CustomContainer)(() => ({
    width: '92%',
    maxWidth: '1300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 1400px)': {
      maxWidth: 1320,
    },
    '@media (min-width: 600px)': {
      padding: '30px 12px',
    }
  }));

  const StyledBodyContainer = styled(CustomContainer)(() => ({
    width: '100%',
    marginTop: 40,
    marginBottom: 50,
    padding: '60px',
    backgroundColor: '#27292a',
    display: 'flex',
    flexDirection: 'column',

    '@media (min-width: 1200px)': {
      maxWidth: '1550px',
    },
    '@media (min-width: 600px)': {
      padding: 60,
    }
  }));

  const StyledBannerContainer = styled(CustomContainer)(() => ({
    height: 400,
    minHeight: 380,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    marginBottom: '48px',
    borderRadius: '25px',
    backgroundImage: 'url(https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/banner-bg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    '@media (min-width: 600px)': {
      padding: '40px 60px',
    }
  }));

  const StyledPopularContainer = styled(CustomContainer)(() => ({
    backgroundColor: '#1f2122',
    marginBottom: '60px',
    '@media (min-width: 600px)': {
      padding: '30px',
    }
  }));

  const ContentTitle = ({content, title}) => {
    return (<StyledContentTitle>
      <h4>
        <em>{title}</em>
        {` ${content}`}
      </h4>
    </StyledContentTitle>)
  }

  const StyledContentTitle = styled('div')(() => ({
    'h4':{
      fontSize: '34px',
      color: '#ec6090',
      marginBottom: '30px',
    },
    'em':{
      color: '#ffffff',
      fontStyle: 'normal',
      textDecoration: 'underline'
    }
  }));


  const StyledPopularGame = styled(ImageList)(()=>({
    width: '100%',
    marginBottom: '48px'
  }));

  const StyledImageListItem = styled(ImageListItem)(()=>({
    padding: '30px 15px',
    backgroundColor: '#27292a',
    borderRadius: 25,
    'img':{
      borderRadius: '25px',
      marginBottom: '20px',
    }
  }));

  const StyledStackGameInfo = styled(Stack)(()=>({
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }));

  const StyledButton = styled(Button)(()=>({
    minWidth: 'fit-content',
    borderRadius: 25,
    backgroundColor: '#ec6090',
    textTransform: 'capitalize',
    padding: '12px 30px',
    '&:hover':{
      backgroundColor: '#ffffff',
      color: '#ec6090'
    }
  }));

  const StyledDownloadedButton = styled(StyledButton)(()=>({
    height: 50,
    backgroundColor: 'transparent',
    color: ThemeDark.gray.base,
    border: 'solid 1px',
    '&:hover':{
      backgroundColor: 'transparent',
      color: ThemeDark.gray.base,
      cursor: 'default'
    }
  }));

  const StyledNotDownloadedButton = styled(StyledButton)(()=>({
    height: 50,
    textTransform: 'capitalize',
    backgroundColor: 'transparent',
    border: 'solid 1px',
    color: '#ec6090',
    '&:hover':{
      backgroundColor: '#ffffff',
      color: '#ec6090'
    }
  }));

  const StyledBottomCenterContainerButton = styled(StyledButton)(()=>({
    position:'absolute',
    left: '50%',
    transform: 'translate(-50%,0)',
  }));

  const StyledYourGameContainer = styled(CustomContainer)(() => ({
    backgroundColor: '#1f2122',
    '@media (min-width: 600px)': {
      padding: '30px',
    }
  }));

  const StyledYourGameStack = styled(Stack)(()=>({
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #27292a'
  }));


  const StyledYourGameImg = styled('img')(()=>({
    width: '80px',
    height: '80px',
    borderRadius: '25px',
  }));

  const StyledYourGameInfo = styled(Stack)(()=>({
    width: '100%',
    'span':{
      color: ThemeDark.gray.base
    }
  }));
  
  const Item = ({content, subContent}) => {
    return (<Stack
      direction="column"
      sx={{
        width: '100%',
        justifyContent: 'center',
        padding: '10px',
      }}
    >
      <StyledYourGameInfo
        direction="column"
      >
        <h4>{content}</h4>
        <span>{subContent}</span>
      </StyledYourGameInfo>
    </Stack>)
    
  }
  return (
    <StyledContainer>
      <ThemeProvider theme={ThemeDark}>
        <CssBaseline/>
        <StyledAppBar elevation={0} position="static">
          <StyledToolBar variant="dense">
            <StyledLeftToolBarStack>
              <img
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/logo.png"
                alt="logo"/>
              <StyledOutlinedInput
                placeholder="Type Something"
                startAdornment={(
                  <InputAdornment position="start">
                    <StyledSearchIcon/>
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
                <StyledMenuItem>Profile</StyledMenuItem>
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
          <CustomContainer
            sx={{
              width: '55%',
              marginLeft: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: '20px',
                marginBottom: '16px',
              }}
            >Welcome To Cyborg</Typography>
            <Typography sx={{
              textTransform: 'uppercase',
              fontSize: '45px',
              marginBottom: '16px',
              fontWeight: 700
            }}>
              <em style={{
                color: '#ec6090',
                fontStyle: 'normal',
              }}>Browse </em>
              Our Popular Games Here
            </Typography>
            <StyledButton variant="contained">Browse Now</StyledButton>
          </CustomContainer>
        </StyledBannerContainer>
        <StyledPopularContainer>
          <ContentTitle title="Most Popular" content=" Right Now"/>
          <StyledPopularGame cols={4} gap={24}>
            {popularGame.map((item) => (
              <StyledImageListItem key={item.image}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <StyledStackGameInfo>
                  <StyledStack >
                    <StyledStackGameInfo direction="row">
                      <h4>{item.title}</h4>
                      <Stack direction="row">
                        <StarIcon sx={{color:"#ffff00"}} fontSize={'small'} />
                        4.8
                      </Stack>
                    </StyledStackGameInfo>
                    <StyledStackGameInfo direction="row">
                      <span style={{
                        color: ThemeDark.gray.base
                      }}>{item.type}</span>
                      <Stack direction="row">
                        <DownloadIcon sx={{color:"#ec6090"}} fontSize={'small'} />
                        2.5M
                      </Stack>
                    </StyledStackGameInfo>
                  </StyledStack>
                </StyledStackGameInfo>

              </StyledImageListItem>
            ))}
          </StyledPopularGame>
          <Stack>
            <StyledBottomCenterContainerButton variant="contained">Discover Popular</StyledBottomCenterContainerButton>
          </Stack>
        </StyledPopularContainer>
        <StyledYourGameContainer>
          <ContentTitle title="Your Gaming" content="Library"/>
          {yourGaming.map((item) => (
            <StyledYourGameStack direction="row" key={item.title}>
              <StyledYourGameImg src={item.image} alt={item.title}/>
              <Item  content={item.title} subContent={item.type}/>
              <Item  content='Date Added' subContent={item.dateAdded}/>
              <Item  content='Hours Played' subContent={item.hoursPlayed}/>
              <Item  content='Currently' subContent={item.currently ? 'Downloaded' : 'Available'}/>
              <Stack sx={{justifyContent:'center',}}>
                {item.currently ?
                  <StyledDownloadedButton>Downloaded</StyledDownloadedButton> :
                  <StyledNotDownloadedButton>Download</StyledNotDownloadedButton>}
              </Stack>
            </StyledYourGameStack>
          ))}
          <StyledBottomCenterContainerButton variant="contained">View Your Library</StyledBottomCenterContainerButton>
        </StyledYourGameContainer>
      </StyledBodyContainer>
      <Stack sx={{alignItems: 'center',}}>
        <Typography>Copyright © 2036 Cyborg Gaming Company. All rights reserved.</Typography>
        <Typography>Design: TemplateMo</Typography>
      </Stack>
    </StyledContainer>
  );
}
