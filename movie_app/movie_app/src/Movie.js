import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    summary : PropTypes.string.isRequired
  }
  render() {
    return (
      <div className='Movie'>
        <div className='Movie__Column'>
          <MoviePoster poster={this.props.poster} title={this.props.title} />
        </div>
        <div className='Movie__Column'>
          <h1>{this.props.title}</h1>
          <div className='Movie__Genres'>{this.props.genres.join(' ')}</div>
          <p className='Movie_Summary'>
            <LinesEllipsis
              text={this.props.summary}
              maxLine='3'
              ellipsis='...'
              trimRight
              basedOn='letters'
              />   
          </p>
        </div>
        

      </div>
    );
  }
}

class MoviePoster extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }
  render() {
    return (
      <img className='Movie__Poster' src={this.props.poster} alt={this.props.title} title={this.props.title} />
    );
  }
}
export default Movie; 