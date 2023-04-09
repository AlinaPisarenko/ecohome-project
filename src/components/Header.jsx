import React from 'react';
import logoBBC from '../images/logo-bbc.png';
import logoBi from '../images/logo-bi.png';
import logoForbes from '../images/logo-forbes.png';
import logoTC from '../images/logo-techcrunch.png';
import logoMain from '../images/logo.png';

export default function Header() {
  return (
    <header className='header'>
      <img src={logoMain} className='header__logo' alt='Seen on logo 1' />
      <h3 className='heading-3'>Your own home:</h3>
      <h1 className='heading-1'>Find it. Tour it. Own it.</h1>
      <a href="#houses" className='btn header__btn'>View our properties</a>
      <div className='header__seenon-text'>Seen on</div>
      <div className='header__seenon-logos'>
        <img src={logoBBC} alt='Seen on logo 1' />
        <img src={logoForbes} alt='Seen on logo 2' />
        <img src={logoTC} alt='Seen on logo 3' />
        <img src={logoBi} alt='Seen on logo 4' />
      </div>
    </header>
  );
}
