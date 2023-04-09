import React from 'react';
import icons from '../images/sprite.svg';

export default function EachHouse({ house }) {
  const { area, id, location, images, price, rooms, title } = house;
  return (
    <div className='home'>
      <div className='home__img-wrapper'>
        <img src={images[0]} alt='House 1' className='home__img' />
      </div>

      {/* <svg className='home__like'>
        <use href={`${icons}#icon-heart-full`} />
      </svg> */}

      <h5 className='home__name'>{title}</h5>
      <div className='home__location'>
        <svg>
          <use href={`${icons}#icon-map-pin`} />
        </svg>
        <p>{location}</p>
      </div>
      <div className='home__rooms'>
        <svg>
          <use href={`${icons}#icon-profile-male`} />
        </svg>
        <p>{rooms} rooms</p>
      </div>
      <div className='home__area'>
        <svg>
          <use href={`${icons}#icon-expand`} />
        </svg>
        <p>
          {area} ft<sup>2</sup>
        </p>
      </div>
      <div className='home__price'>
        <svg>
          <use href={`${icons}#icon-key`} />
        </svg>

        <p>${price}</p>
      </div>
      <a href={`mailto:example@example.com?subject=Question%20about%20Job%20Opernings&body=My%20name%3A%20%3Cyour%20name%20here%3E%0D%0A%0D%0AMy%20questions%3A%20%3Center%20question%20here%3E%0D%0A`} className='btn home__btn'>Contact realtor</a>
    </div>
  );
}
