import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
  state = {}
  
  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = _ => {
    const movies = this.state.movies.map( movie =>  {
      return <Movie 
        title={movie.title} 
        poster={movie.medium_cover_image} 
        genres={movie.genres} 
        summary={movie.summary}
        key={movie.id} />
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies : movies
    }, _=> {console.log(movies,this.state)});
  };

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={this.state.movies? "App": "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
