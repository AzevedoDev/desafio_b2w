import React from 'react';
import { Container, Planets } from './style';

const Planet = ({ planets }) => (
  <Container>
    {planets.map(planet => (
      <Planets key={Math.random()}>
        <header>
          <strong>{planet.name}</strong>
        </header>
        <ul>
          <li>
            Population:
            <small>
              {' '}
              {planet.population}
            </small>
          </li>
          <li>
            Climate:
            <small>
              {' '}
              {planet.climate}
            </small>
          </li>
          <li>
            Terrain:
            <small>
              {' '}
              {planet.terrain}
            </small>
          </li>
        </ul>
        <div>
          <strong>Fetured in Films</strong>
          <ul>
            {planet.films.length === 0 ? (
              <li>This planet did not participate in any movie.</li>
            ) : (
              planet.films.map(movie => <li key={Math.random()}>{movie}</li>)
            )}
          </ul>
        </div>
      </Planets>
    ))}
  </Container>
);
export default Planet;
