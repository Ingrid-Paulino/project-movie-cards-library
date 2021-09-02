// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { movie } = this.props;

    return (
      <p>{ movie.rating }</p>
    );
  }
}

Rating.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number,
  }).isRequired,
};

Rating.default = {
  movie: {},
};
