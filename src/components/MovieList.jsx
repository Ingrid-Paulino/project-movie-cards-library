// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        {movies.map((movie) => <MovieCard movieInfo={ movie } key={ movie.title } />)}
      </main>
    );
  }
}

export default MovieList;
