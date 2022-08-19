import { styled, Typography } from '@mui/material';

const StyledMenuItem = styled(Typography)(({ theme }) => ({
  padding: '0 20px',
  color: theme.gray.base,
  cursor: 'pointer',
  '&:hover': {
    color: theme.hover.pink,
  },
  [theme.breakpoints.down(993)]: {
    color: 'red',
  },
}));

export default StyledMenuItem;
