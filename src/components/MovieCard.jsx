// implement MovieCard component here
import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <h2>{movie.title}</h2>
        <h3>{movie.subtitle}</h3>
        <p>{movie.storyline}</p>
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{movie.rating}</p>
      </section>
    );
  }
}
