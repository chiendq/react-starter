import * as React from 'react';
import {
  Button,
  Container,
  CssBaseline, Grid, ImageList, ImageListItem,
  Stack,
  styled, Table, TableCell, TableContainer, TableRow,
  Typography, useMediaQuery, useTheme,
} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import ThemeDark from "../../components/ThemeDark";
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';
import {Header} from "./components/Header";
import {Data} from "./Data";
import themeDark from "../../components/ThemeDark";

export default function Home() {
  const theme = useTheme()
  const isMedium = useMediaQuery('(max-width:900px)');
  const isSmall = useMediaQuery('(max-width:600px)');

  const StyledStack = styled(Stack)(() => ({
    width: '100%',
  }));

  const CustomContainer = styled(Container)((theme) => ({
    borderRadius: '25px',
    [ThemeDark.breakpoints.up("sm")]: {
      padding: 0,
    }
  }));

  const StyledContainer = styled(CustomContainer)(() => ({
    width: '92%',
    maxWidth: '1300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [ThemeDark.breakpoints.up("lg")]: {
      maxWidth: 1320,
    },
    [ThemeDark.breakpoints.up("sm")]: {
      padding: 12,
    },
  }));

  const StyledBodyContainer = styled(CustomContainer)(({theme}) => ({
    width: '100%',
    marginBottom: 50,
    backgroundColor: '#27292a',
    display: 'flex',
    flexDirection: 'column',
    [ThemeDark.breakpoints.down("sp")]: {
      padding: 60,
      maxWidth: 1320,
    },
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
    [ThemeDark.breakpoints.down("sm")]: {
      textAlign: 'center',
    },
    [ThemeDark.breakpoints.down("xl")]: {
      padding: '60px 40px',
    }
  }));

  const StyledPopularContainer = styled(CustomContainer)(({theme}) => ({
    backgroundColor: '#1f2122',
    marginBottom: 60,
    [ThemeDark.breakpoints.down("xl")]: {
        padding: 30,
    },
    [ThemeDark.breakpoints.down("md")]: {
      paddingBottom: 80,
    },
  }));

  const ContentTitle = ({content, title}) => {
    const breakPoint = useMediaQuery('(max-width:650px)');

    return (
    <Stack textAlign={isMedium ? "center" : "none"}  mb={4} direction={breakPoint ? "column" : "row"}>
        <Typography
          variant="h4"
          fontSize={34}
          fontStyle="normal"
          mr={1}
          fontWeight="bold"
          sx={{textDecoration: "underline"}}
          component={"em"}>{title}</Typography>
        <Typography
          variant="h4"
          fontSize={34}
          fontWeight="bold"
          color={ThemeDark.pink.base}
        >{content}</Typography>
    </Stack>)
  }

  const StyledPopularGame = styled(ImageList)(()=>({
    width: '100%',
    marginBottom: '48px',
    justifyItems: 'center',
}));

  const StyledImageListItem = styled(ImageListItem)(()=>({
    padding: '30px 15px',
    backgroundColor: '#27292a',
    borderRadius: 25,
    'img':{
      borderRadius: '25px',
      marginBottom: '20px',
    },
    [ThemeDark.breakpoints.down("md")]:{
      maxWidth: 250,
      maxHeight: 250,
      padding: '15px 15px',
      'img':{
        borderRadius: '25px',
        marginBottom: '10px',
      },
    },
    [ThemeDark.breakpoints.down("sm")]: {
      maxWidth: 300,
      maxHeight: 300,
      padding: 15,
      'img':{
        borderRadius: '25px',
        marginBottom: '20px',
      },
    },
    }));

  const StyledStackGameInfo = styled(Stack)(()=>({
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }));

  const StyledButton = styled(Button)(()=>({
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
    [ThemeDark.breakpoints.down("md")]:{
      transform: 'translate(-50%,100%)',
    }
  }));

  const StyledYourGameContainer = styled(CustomContainer)(() => ({
    backgroundColor: '#1f2122',
    '@media (min-width: 600px)': {
      padding: 30,
    },
  }));

  const StyledYourGameStack = styled(Stack)(()=>({
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #27292a',
    [ThemeDark.breakpoints.down("md")]:{
      // transform: 'translate(-50%,100%)',
    }
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
    </Stack>
    )};

  const YourGameList = () =>{
    return(Data.yourGaming.map((item) => (
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
      )));
  }

  const StyledTableCellHeader = styled(TableCell)(()=>({
    fontWeight: "bold",
  }));

  return (
    <ThemeProvider theme={ThemeDark}>
      <CssBaseline/>
        <StyledContainer>
          <Header/>
        <StyledBodyContainer sx={()=> {if(isMedium) return {marginTop: 12}}}>
          <StyledBannerContainer>
            <CustomContainer
              sx={{
                marginLeft: 0,
                [ThemeDark.breakpoints.down("xl")]: {
                  width: '55%',
                },
                [ThemeDark.breakpoints.down("md")]: {
                  fontSize: 35,
                  width: '100%',
                  textAlign: 'center',
                },
                [ThemeDark.breakpoints.down("sm")]: {
                  '& p':{
                    fontSize: 35,
                  }
                },

              }}
            >
              <Typography
                variant={"h6"}
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
            <ContentTitle title="Most Popular" content="Right Now"/>
            <StyledPopularGame sx={{overflow: 'unset',}} cols={isSmall ? 1 : isMedium ? 2 : 4} gap={"2%"} >
              {Data.popularGame.map((item) => (
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
            <TableContainer component="paper">
              <Table>
                <TableRow>
                  <StyledTableCellHeader></StyledTableCellHeader>
                  <StyledTableCellHeader>Game</StyledTableCellHeader>
                  <StyledTableCellHeader>Date Added</StyledTableCellHeader>
                  <StyledTableCellHeader>Hours Played</StyledTableCellHeader>
                  <StyledTableCellHeader>Currently</StyledTableCellHeader>
                  <StyledTableCellHeader></StyledTableCellHeader>
                </TableRow>
                {Data.yourGaming.map((item)=>(
                  <TableRow>
                    <TableCell>
                      <StyledYourGameImg src={item.image}/>
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.dateAdded}</TableCell>
                    <TableCell>{item.hoursPlayed}</TableCell>
                    <TableCell>{item.currently ? 'Downloaded' : 'Available'}</TableCell>
                    <TableCell>{item.currently ?
                      <StyledDownloadedButton>Downloaded</StyledDownloadedButton> :
                      <StyledNotDownloadedButton>Download</StyledNotDownloadedButton>}</TableCell>
                  </TableRow>
                ))}
              </Table>
            </TableContainer>
            <StyledBottomCenterContainerButton variant="contained">View Your Library</StyledBottomCenterContainerButton>
          </StyledYourGameContainer>
        </StyledBodyContainer>
        <Stack sx={{alignItems: 'center',}}>
          <Typography>Copyright © 2036 Cyborg Gaming Company. All rights reserved.</Typography>
          <Typography>Design: TemplateMo</Typography>
        </Stack>
      </StyledContainer>
    </ThemeProvider>


  );
}
