const { useState, useEffect } = require('react');

const usePlayers = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/players')
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return [players, setPlayers];
};

export default usePlayers;
