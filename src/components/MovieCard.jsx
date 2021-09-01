// implement MovieCard component here
import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{movie.rating}</p>
      </section>
    );
  }
}
