import React from 'react';
import ColorfulLogo from '../../assets/img/logo.png';
import WhiteLogo from '../../assets/img/logo-white.png';

export const Logo = (props) => {
  const { white, ...other } = props;
  const styles = {
    width: white ? '14.64rem' : '18.438rem',
    height: white ? '3.563rem' : '4.5rem',
  };
  return (
    <img
      src={white ? WhiteLogo : ColorfulLogo}
      alt="Ioasys Logo"
      style={styles}
      {...other}
    />
  );
};
