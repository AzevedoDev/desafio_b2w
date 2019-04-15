import React from 'react';
import { Container, Planets } from './style';

const Planet = ({ planets, movies }) => (
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
            {movies[0].map(film => (
              <li>{film}</li>
            ))}
          </ul>
        </div>
      </Planets>
    ))}
  </Container>
);
export default Planet;
