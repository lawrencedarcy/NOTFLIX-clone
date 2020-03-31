import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      myList: [],
      comMovies: [],
      selectedMovie: undefined
      
    };

    this.addToList = this.addToList.bind(this);
    this.movieSelector = this.movieSelector.bind(this);
  }

  componentDidMount() {
    axios.get(`http://movied.herokuapp.com/discover`).then(res => {
      const movies = res.data;
      this.setState({ movies });
    });

    axios.get(`http://movied.herokuapp.com/categories/35`).then(res => {
      const comMovies = res.data;
      this.setState({ comMovies });
    });


    this.setState({selectedMovie: this.state.movies[0]})
  }

  movieSelector(movie){
  
    this.setState((state) => {
      return {selectedMovie: movie}
    });

  }

  
  

  addToList(movie) {

    movie.myList = true;

    !this.state.myList.includes(movie) &&
      this.setState({ myList: [...this.state.myList, movie] });

      let comedies = this.state.comMovies;
      comedies.forEach(film => {
        if(film.id === movie.id) 
        {film.myList = true   }
      })

      let trending = this.state.movies;
      trending.forEach(film => {
        if(film.id === movie.id) 
        {film.myList = true}
      })
      this.setState({movies: trending});
      this.setState({comMovies: comedies});
  }

  render() {
    const myList = this.state.myList.length > 0 && (
      <MovieList movies={this.state.myList} 
      label={'My List'}
      movieSelector={this.movieSelector} />
    );

    const movieList = (
      <MovieList
        movieSelector={this.movieSelector}
        showAddButton={this.showAddButton}
        movies={this.state.movies}
        addToList={this.addToList}
        label={'Trending now'}
      />
    );

    const comMovies = (
      <MovieList
        movieSelector={this.movieSelector}
        showAddButton={this.showAddButton}
        movies={this.state.comMovies}
        addToList={this.addToList}
        label={'Comedy'}
      />
    );

    return (
      <div className='dashboard'>
        <Navbar />
        <div className="hero">
          {
          this.state.selectedMovie &&
          <div className="hero_wrapper"> 
            <div className="hero_textbox">
              
            <div className="hero_title">{this.state.selectedMovie.title}</div>
        <div className="hero_overview">{this.state.selectedMovie.overview}</div> 
            </div>
            <div className="hero_image_container" >
        <img className="hero_image" src={`https://image.tmdb.org/t/p/w300/${this.state.selectedMovie.poster_path}`} />
            </div>
          </div>
        
          }
        
         


        </div>
        <div className='dashboard-container'>
          {myList}
          {movieList}
          {comMovies}
        </div>
      </div>
    );
  }
}

export default Dashboard;
