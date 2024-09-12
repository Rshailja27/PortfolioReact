import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PortfolioPage from './components/PortfolioPage';
import './App.css'


export default function App() {
  const [themeMode, setThemeMode] = useState('light');

  const handleThemeChange = (mode) => {
    setThemeMode(mode);
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Navbar handleThemeChange={handleThemeChange} themeMode={themeMode}/> */}
      <PortfolioPage handleThemeChange={handleThemeChange} themeMode={themeMode} />
    </ThemeProvider>        
      
    </>
  )
}


