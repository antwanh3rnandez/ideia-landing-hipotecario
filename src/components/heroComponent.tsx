import {
    AppBar,
    Toolbar,
    Box
} from '@mui/material'

import '../index.css'

import logo from '../assets/logo.svg';
import hero from '../assets/hero.png';

function HeroSection() {

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--primary)' }}>
      <AppBar style={{ backgroundColor: 'var(--primary)', padding: '15px' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ width: '15vh', color: 'yellow' }} />
        </Toolbar>
      </AppBar>
      <Box display="flex" justifyContent="center" alignItems="start" height="100%" marginTop="10vh">
        <Box width="100%">
            <img src={hero} style={{ width: '100%', height: 'auto' }} alt="Hero" />
        </Box>
      </Box>
           
    </div>
  );
}

export default HeroSection;
