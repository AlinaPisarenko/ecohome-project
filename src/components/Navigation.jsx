import React from 'react';

export default function Navigation() {
  return (
    <div className='navigation'>
      <input
        type='checkbox'
        className='navigation__checkbox'
        id='navi-toggle'
      />

      <label htmlFor='navi-toggle' className='navigation__button'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>

      <div className='navigation__background'>&nbsp;</div>

      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>01</span>Request proposal
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#houses' className='navigation__link'>
              <span>02</span>Contact realtor
            </a>
          </li>

          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>03</span>Submit your property
            </a>
          </li>

          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>04</span>Come work with us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
