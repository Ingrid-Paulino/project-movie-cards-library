// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

MovieList.default = {
  movies: [{
    imagePath: '',
    title: 'Nome Padrão',
    subtitle: '',
    storyline: '',
    rating: 0,
  }],
};

export default MovieList;
