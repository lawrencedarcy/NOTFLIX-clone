import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css';

const MovieList = (props) => {
  return (
    <div className="movie_wrapper">
       <div className="list_label">{props.label}</div> 
      <div className="movie_list">
        {props.movies.map(movie => (
          <Movie
          removeFromList={props.removeFromList}
          movieSelector={props.movieSelector}
          myList={movie.myList}
          feed={props.label}
          movie={movie} 
          id={movie.id}
          key={movie.id}
          title={movie.title}
          img={movie.backdrop_path}
          addToList={props.addToList}    
          />
        ))
        }
      </div>

      </div>
  );
}

export default MovieList;
