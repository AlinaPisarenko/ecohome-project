import React from 'react';
import imgOne from '../images/cpl-img.jpeg';
import imgTwo from '../images/house-img.webp';

export default function Review() {
  return (
    <>
      <div className='review__pictures'>
        <img
          src={imgTwo}
          alt='Couple with new house'
          className='review__img--1'
        />

        <img src={imgOne} alt='New house' className='review__img--2' />
      </div>

      <div className='review__content'>
        <h3 className='heading-3 mb-sm'>Happy Customers</h3>
        <h2 className='heading-2 heading-2--dark mb-md'>
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className='review__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <a href="#houses" className='btn'>Find your own home</a>
      </div>
    </>
  );
}
