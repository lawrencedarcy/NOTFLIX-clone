import React, { Component } from 'react';
import './Hero.css'

class Hero extends Component {
  render() {

    const { selectedMovie } = this.props;
    return (
      <div>
          <div className="hero">
          {
          selectedMovie &&
          <div className="hero_wrapper"> 
            <div className="hero_textbox">
              
            <div className="hero_title">{selectedMovie.title}</div>
  <div className="hero_release"> <div className="hero_release red">Released:</div> {selectedMovie.release_date && selectedMovie.release_date.split("-").reverse().join("-")}</div>
  <div className="hero_rating">  <div className="hero_release red">IMDB rating: </div> {selectedMovie.vote_average}</div>

          <div className="hero_overview">{selectedMovie.overview}</div> 
            </div>
            { selectedMovie.poster_path &&
              <div className="hero_image_container" >
              <img className="hero_image" src={`https://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}`} />
                  </div>
            }
          </div>
        
          }
        

        </div>
      </div>
    );
  }
}

export default Hero;