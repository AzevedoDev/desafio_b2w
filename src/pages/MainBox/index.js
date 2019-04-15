import React, { Component } from 'react';
import { Container } from './style';
import api from '../../services/api';
import PlanetCard from '../../components/PlanetCard';

export default class MainBox extends Component {
  state = {
    planetInput: '',
    planets: [],
    movies: [],
  };

  handlePlanetSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.get(`planets/?search=${this.state.planetInput}`);
      const result = await Promise.all(res.data.results[0].films.map(f => api.get(f)));

      this.setState({
        planetInput: '',
        planets: [...this.state.planets, res.data.results[0]],
        movies: [...this.state.movies, result.map(r => r.data.title)],
      });
      console.log(result.map(r => r.data));
      // console.log(result);
      console.log(this.state.movies);
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
          <button type="submit">Add Planet</button>
        </form>
        <div>
          <PlanetCard planets={this.state.planets} movies={this.state.movies} />
        </div>
      </Container>
    );
  }
}

// ...this.state.movies,
// res.data.results[0].films.map(f => f.replace(/^https?:\/\//, '').split('/')[3]),
