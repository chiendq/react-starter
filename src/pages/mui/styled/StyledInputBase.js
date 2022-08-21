import { InputBase, styled } from '@mui/material';

const StyledInputBase = styled(InputBase)(() => ({
  input: {
    '&::placeholder': {
      fontWeight: '100',
      fontSize: '14px',
    },
  },
}));

export default StyledInputBase;
