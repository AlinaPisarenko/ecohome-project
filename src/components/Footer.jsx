import React from 'react';

export default function Footer() {
  return (
    <div className='footer'>
      <ul className='nav'>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Find your dream home
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Request proposal
          </a>
        </li>

        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Contact us
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Submit your property
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Come work with us!
          </a>
        </li>
      </ul>
      <p className='copyright'>
        This project created by{' '}
        <a
          className=' footer__link'
          href='https://www.alinapisarenko.com/'
          target='_blank'
        >
          Alina Pisarenko{' '}
        </a>{' '}
        and is open-sourced on{' '}
        <a
          className='footer__link'
          href='https://github.com/AlinaPisarenko/explore-app'
          target='_blank'
        >
          {' '}
          GitHub
        </a>
      </p>
    </div>
  );
}
