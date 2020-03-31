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
      selectedMovie: null
      
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
    
    this.setState({selectedMovie: movie})
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
          this.state.selectedTitle &&
        <div class="hero_title">{this.state.selectedMovie.title} HELLOOO</div>

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
