import React, { Component } from 'react';
import { Container } from './style';
import api from '../../services/api';
import PlanetCard from '../../components/PlanetCard';

export default class MainBox extends Component {
  state = {
    planetInput: '',
    noInput: false,
    planets: [],
    err: false,
  };

  handleRandomButton = async () => {
    const randomPlanet = (min, max) => {
      const minimo = Math.ceil(min);
      const maximo = Math.floor(max);
      const randomNumber = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      // eslint-disable-next-line
      if (randomNumber === randomNumber) {
        return randomNumber + 1;
      }
      return randomNumber;
    };

    const randomP = randomPlanet(1, 61);
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
        noInput: false,
        err: false,
      });
      window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
    } catch (err) {
      this.setState({
        err: true,
      });
    }
  };

  handlePlanetSubmit = async (e) => {
    e.preventDefault();
    const { planetInput } = this.state;

    try {
      if (planetInput !== undefined && planetInput !== '') {
        const res = await api.get(`planets/?search=${planetInput}`);

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
          noInput: false,
          err: false,
        });
        window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
      } else {
        this.setState({
          noInput: true,
        });
      }
    } catch (err) {
      this.setState({
        noInput: true,
        err: true,
      });
    }
  };

  render() {
    const {
      planetInput, planets, err, noInput,
    } = this.state;
    return (
      <Container noInputerror={noInput}>
        <form onSubmit={this.handlePlanetSubmit}>
          <span>Search your Favorite Planet</span>
          {!err === false ? <p>We have a problem!</p> : ''}
          <input
            type="text"
            value={planetInput}
            onChange={e => this.setState({ planetInput: e.target.value })}
            placeholder={noInput === true ? 'This Planet don\'t exist' : 'Planet Name'}
          />
          <button type="submit">Search Planet</button>
          <button onClick={this.handleRandomButton} type="button">
            Random Planet
          </button>
        </form>
        <div onChange={this.handleSmothingScroll}>
          <PlanetCard planets={planets} />
        </div>
      </Container>
    );
  }
}
