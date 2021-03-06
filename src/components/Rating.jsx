// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    console.log(rating);
    return (
      <div className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
