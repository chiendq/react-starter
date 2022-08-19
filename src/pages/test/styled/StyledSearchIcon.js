import { styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.gray.base,
  position: 'sticky',
  fontSize: '16px',
  width: '18px',
  height: '18px',
  fontWeight: 'bold',
}));

export default StyledSearchIcon;
