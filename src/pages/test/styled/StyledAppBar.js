import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#1f2122',
  margin: '30px auto',
  position: 'sticky',
  width: '100%',
  height: '70px',
  minHeight: '80%',
}));

export default StyledAppBar;
