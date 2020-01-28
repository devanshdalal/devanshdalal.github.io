import React from 'react';

import LogoButton from './components/header/logo-button/LogoButton';
import Links from './components/header/links/Links';

import './header.css';

const Header = (props) => {
  const { Component, path } = props;

  return (
    <div>
      <header>
        <LogoButton alt="Logo" />
        <Links path={path}/>
      </header>
      <Component />
    </div>
  )

};

export default Header;
