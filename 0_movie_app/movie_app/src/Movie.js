import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <MoviePoster poster={this.props.poster} title={this.props.title} />
      </div>
    );
  }
}

class MoviePoster extends Component {
  static propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string
  }
  render() {
    return (
      <img src={this.props.poster} alt={this.props.title} />
    );
  }
}
export default Movie; 