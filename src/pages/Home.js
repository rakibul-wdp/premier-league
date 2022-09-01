import React from 'react';
import Banner from '../components/Banner';
import usePlayers from '../hooks/usePlayers';

const Home = () => {
  const [players] = usePlayers();
  return (
    <>
      <Banner />
      {players.length}
    </>
  );
};

export default Home;
