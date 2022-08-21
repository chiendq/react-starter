import { OutlinedInput, styled } from '@mui/material';

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: '#27292a',
  borderRadius: '25px',
  height: '54px',
  fontSize: '16px',
  padding: '0px 15px 0px 24px',
  input: {
    '&::placeholder': {
      fontSize: 16,
      fontWeight: '200',
    },
  },

}));

export default StyledOutlinedInput;
