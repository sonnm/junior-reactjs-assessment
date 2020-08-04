import React, { useState, useEffect, memo } from 'react';
import PageLayout from 'components/PageLayout';
import { Link } from 'react-router-dom';
import { fetchHeroes } from './control';
import './style.css';

function Heroes() {
  // eslint-disable-next-line no-unused-vars
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetchHeroes().then((result) => {
      setHeroes(result);
    });
  }, []);

  const renderTable = () => (
    <table className="heroes-table">
      <thead>
        <tr>
          <th>Hero</th>
          <th>Pro Picks/Bans*</th>
          <th>Pro Wins*</th>
        </tr>
      </thead>
      <tbody>
        {heroes.map((hero) => (
          <tr>
            <td>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={process.env.REACT_APP_API_ENDPOINT + hero.icon} alt={hero.localized_name} style={{ marginRight: '15px' }} />
                <Link to={`/heroes/${hero.name}`} style={{ color: '#e84b4e', textDecoration: 'none' }}>{hero.localized_name}</Link>
              </div>
            </td>
            <td>
              {hero.pro_pick}
              /
              {hero.pro_ban}
            </td>
            <td>
              {hero.pro_win}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <PageLayout>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <h1>Heroes</h1>
        <div style={{ padding: '10px 0', borderBottom: '1px solid #dadad8', textAlign: 'left' }}>* in last 30 days</div>
        {renderTable()}
      </div>
    </PageLayout>
  );
}

export default memo(Heroes);
