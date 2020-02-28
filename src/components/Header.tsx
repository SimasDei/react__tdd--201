import React from 'react';

import Logo from '../assets/images/logo.png';
import '../styles/Header.scss';

export const Header = () => {
  return (
    <header>
      <div className='wrap'>
        <div className='logo'>
          <img src={Logo} alt='yes' />
        </div>
      </div>
    </header>
  );
};

export default Header;
