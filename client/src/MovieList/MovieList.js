import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css';

class MovieList extends Component {

  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="movie_list">
<div className="list_label">My list</div>
        {this.props.movies.map(movie => (
          <Movie 
          key={movie.id}
          title={movie.title}
          img={movie.backdrop_path}
          description={movie.overview}
          release={movie.release_date}
          rating={movie.vote_average}
          addToList={this.props.addToList}    
          />
        ))
        }
      </div>
    );
  }
}

export default MovieList;