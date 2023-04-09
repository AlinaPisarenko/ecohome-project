import React from 'react';

export default function Realtors({ realtors }) {
  const first3 = realtors.slice(0, 3);

  let eachRealtor = first3.map((realtor) => {
    return (
      <div className='realtors__list' key={realtor.id}>
        <img src={realtor.image} alt='Realtor 1' className='realtors__img' />
        <div className='realtors__details'>
          <h4 className='heading-4 heading-4--light'>{realtor.name}</h4>
          <p className='realtors__sold'>{realtor.total} houses sold</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className='realtors'>
        <h3 className='realtors__title heading-3'>Top 3 Realtors</h3>
        {eachRealtor}
      </div>
    </>
  );
}
