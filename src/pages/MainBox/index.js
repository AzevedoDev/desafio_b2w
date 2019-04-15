import React, { Component } from 'react';
import { Container } from './style';
import api from '../../services/api';
import PlanetCard from '../../components/PlanetCard';

export default class MainBox extends Component {
  state = {
    planetInput: '',
    planets: [],
  };

  handleRandomButton = async () => {
    const randomPlanet = (min, max) => {
      const minimo = Math.ceil(min);
      const maximo = Math.floor(max);
      const randomNumber = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      if (randomNumber === randomNumber) {
        return randomNumber + 1;
      }
      return randomNumber;
    };

    const randomP = randomPlanet(1, 61);
    console.log(randomP);
    try {
      const res = await api.get(`planets/${randomP}`);
      const result = await Promise.all(res.data.films.map(f => api.get(f)));

      this.setState({
        planetInput: '',
        planets: [
          {
            id: Math.random(),
            name: res.data.name,
            population: res.data.population,
            climate: res.data.climate,
            terrain: res.data.terrain,
            films: result.map(r => r.data.title),
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  handlePlanetSubmit = async (e) => {
    e.preventDefault();

    try {
      if (this.state.planetInput !== undefined && this.state.planetInput !== '') {
        const res = await api.get(`planets/?search=${this.state.planetInput}`);

        const result = await Promise.all(res.data.results[0].films.map(f => api.get(f)));

        this.setState({
          planetInput: '',
          planets: [
            {
              id: Math.random(),
              name: res.data.results[0].name,
              population: res.data.results[0].population,
              climate: res.data.results[0].climate,
              terrain: res.data.results[0].terrain,
              films: result.map(r => r.data.title),
            },
          ],
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handlePlanetSubmit}>
          <span>Search your Favorite Planet</span>
          <input
            type="text"
            value={this.state.planetInput}
            onChange={e => this.setState({ planetInput: e.target.value })}
            placeholder="Planet Name"
          />
          <button type="submit">Search Planet</button>
          <button onClick={this.handleRandomButton} type="button">
            Random Planet
          </button>
        </form>
        <div>
          <PlanetCard planets={this.state.planets} />
        </div>
      </Container>
    );
  }
}
