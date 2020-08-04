import React, { useEffect, useState } from 'react';
import { fetchHeroes } from 'pages/Heroes/control';
import './style.css';

const HeroStats = ({ match }) => {
  const [heroes, setHeroes] = useState([]);
  const hero = heroes.find((i) => i.name === match.params.name);
  useEffect(() => {
    fetchHeroes().then((result) => {
      setHeroes(result);
    });
  }, []);

  if (hero) {
    return (
      <div style={{ maxWidth: '860px', margin: '0 auto' }} className="hero-stats">
        <div
          className="cover"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_API_ENDPOINT + hero.img})`, backgroundSize: 'cover', padding: '50px', color: '#fff',
          }}
        >
          <img src={process.env.REACT_APP_API_ENDPOINT + hero.img} alt={hero.localized_name} style={{ marginBottom: '15px', borderRadius: '15px' }} />
          <div style={{ fontWeight: 'bold', fontSize: '36px', marginBottom: '10px' }}>{hero.localized_name}</div>
          <div style={{ textTransform: 'uppercase' }}>
            {hero.attack_type}
            {' '}
            -
            {' '}
            {hero.roles.join(', ')}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default HeroStats;
