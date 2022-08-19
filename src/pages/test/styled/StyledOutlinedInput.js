import { OutlinedInput, styled } from '@mui/material';

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: '#27292a',
  borderRadius: theme.spacing(3),
  height: theme.spacing(6),
  padding: `0px ${theme.spacing(2)}px`,
  input: {
    '&::placeholder': {
      fontSize: 14,
      fontWeight: 400,
    },
  },

}));

export default StyledOutlinedInput;
