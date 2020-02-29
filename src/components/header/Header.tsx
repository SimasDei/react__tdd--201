import React from 'react';

import Logo from '../../assets/images/logo.png';
import './header.styles.scss';

export const Header = () => {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img data-test='logo__img' src={Logo} alt='yes' />
        </div>
      </div>
    </header>
  );
};

export default Header;
