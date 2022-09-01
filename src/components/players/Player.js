import React from 'react';

const Player = ({ player }) => {
  const { name, img, club, date, time } = player;
  return (
    <>
      <div className='card w-96 bg-primary image-full'>
        <figure>
          <img className='w-52 h-44' src={img} alt='player' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-base-100'>{name}</h2>
          <p className='text-base-100'>{date}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary text-base-100'>{club}</button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Player;
