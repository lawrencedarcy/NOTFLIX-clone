
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="movie_card"> 
       <img className="poster" src={`https://image.tmdb.org/t/p/w300/${this.props.img}`}></img>
      </div>
    );
  }
}

export default Movie;