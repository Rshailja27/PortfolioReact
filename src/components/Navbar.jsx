
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import reactLogo from '/dark_logo.png';
import CustomizedSwitch from './Switch';

const options = ['Home', 'About Me', 'Skills', 'Projects', 'Contact Me'];
const optionsId = ['#home', '#aboutme', '#skills', '#projects', '#contactme'];

function Navbar({ handleThemeChange, themeMode }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSwitchChange = (event) => {
    handleThemeChange(event.target.checked ? 'dark' : 'light');
  };

  // Define styles based on themeMode
  const appBarStyle = themeMode === 'dark' 
    ? { bgcolor: '#121212', borderBottom: '1px solid #03ffff' }
    : { bgcolor: '#fff', borderBottom: '1px solid #03ffff' };

  const iconColor = themeMode === 'dark' ? '#fff' : '#212121';

  return (
    <AppBar position="sticky" sx={{ ...appBarStyle, width: '100vw', boxShadow: 'none', padding: '0 6rem' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>        
          <Typography sx={{ 
            position: { xs: 'absolute', md: 'static' },
            top: 0,
            left: 0,
            display: { xs: 'none', md: 'block' },
            width: '50px',
            height: 'auto',
             }}>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo_react" alt="React logo" 
              style={{ height: '38px', borderRadius:'50%'}} />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={iconColor}
              sx={{ fontSize: 40 }} 
            >
              <MenuIcon sx={{ fontSize: 'inherit' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {options.map((option) => (
                <MenuItem key={option} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', color: iconColor }}>{option}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {options.map((option, index) => (
              <Button
                key={option}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: iconColor, display: 'block' }}
              >
                <a 
                  href={optionsId[index]} 
                  style={{ color: 'inherit', textDecoration: 'none', textTransform: 'capitalize' }}
                >
                  {option}
                </a>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, color: iconColor }}>             
            <CustomizedSwitch themeMode={themeMode} handleSwitchChange={handleSwitchChange} />        
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
