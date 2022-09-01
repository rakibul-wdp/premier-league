import React from 'react';
import usePlayers from '../../hooks/usePlayers';
import Player from './Player';

const Players = () => {
  const [players] = usePlayers();
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-72 py-24'>
      {players.map((player) => (
        <Player key={player._id} player={player} />
      ))}
    </div>
  );
};

export default Players;
