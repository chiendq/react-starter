import { styled, Typography } from '@mui/material';

const StyledMenuItem = styled(Typography)(({ theme }) => ({
  padding: '13px 20px',
  color: theme.gray.base,
  fontWeight: 400,

  fontSize: '18px',
  letterSpacing: '.3px',
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    color: theme.hover.pink,
  },
  [theme.breakpoints.down(993)]: {
    color: 'red',
  },
}));

export default StyledMenuItem;
