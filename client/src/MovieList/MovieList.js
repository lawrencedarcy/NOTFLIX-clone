import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css';

class MovieList extends Component {


  render() {
    return (
      
      <div className="movie_wrapper">
       <div className="list_label">{this.props.label}</div> 
      <div className="movie_list">
        {this.props.movies.map(movie => (
          <Movie
          removeFromList={this.props.removeFromList}
          movieSelector={this.props.movieSelector}
          myList={movie.myList}
          feed={this.props.label}
          movie={movie} 
          id={movie.id}
          key={movie.id}
          title={movie.title}
          img={movie.backdrop_path}
          addToList={this.props.addToList}    
          />
        ))
        }
      </div>

      </div>
      
    );
  }
}

export default MovieList;