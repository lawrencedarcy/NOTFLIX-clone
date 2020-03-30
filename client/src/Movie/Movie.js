
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  constructor(props){
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(e) {

    this.props.addToList()
  }


  render() {
    return (
      <div className="movie_card" onClick={this.clickHandler}> 
       <img className="poster" src={`https://image.tmdb.org/t/p/w300/${this.props.img}`}></img>
      <div className="add">tick</div>
      </div>
    );
  }
}

export default Movie;