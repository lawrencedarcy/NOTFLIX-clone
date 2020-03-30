import React, { Component } from 'react';
import Movie from '../Movie/Movie';

class MovieList extends Component {

  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="movie_list">

        {this.props.movies.map(movie => (
          <Movie 
          key={movie.id}
          title={movie.title}
          img={movie.backdrop_path}
          description={movie.overview}
          release={movie.release_date}
          rating={movie.vote_average}    
          />
        ))
        }
      </div>
    );
  }
}

export default MovieList;