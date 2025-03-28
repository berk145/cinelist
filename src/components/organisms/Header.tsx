import { useNavigate } from 'react-router';

import { AppBar, Box, Toolbar } from '@mui/material';

import Logo from '../../assets/cinelist.png';
import '../../styles/header.scss';

const Header = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/`);
  };

  return (
    <AppBar position='fixed' elevation={2} sx={{ backgroundColor: '#f5f5f5' }}>
      <Toolbar>
        <Box component='img' src={Logo} onClick={onClick} className='logo' />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
