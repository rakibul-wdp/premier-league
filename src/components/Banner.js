import React from 'react';

const Banner = () => {
  return (
    <div
      className='hero min-h-[60vh]'
      style={{
        backgroundImage: 'url(https://cdn.coingape.com/wp-content/uploads/2022/06/06184931/premier-league-crypto.jpg)',
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md text-base-100'>
          <h1 className='mb-5 text-5xl font-bold'>Welcome Premier League</h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className='btn btn-primary text-base-100'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
