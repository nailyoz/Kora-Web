import React from 'react';
import Button from '@mui/material/Button';
import { createTheme,  ThemeProvider } from '@mui/material/styles'


export default function MuiButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color='primary' sx={{borderRadius: 36}}>Junte-se a nós</Button>
    </ThemeProvider>   
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#5a0089',
    }
  },
})