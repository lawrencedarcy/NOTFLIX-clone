import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';
import MovieList from '../MovieList/MovieList';
import Hero from '../Hero/Hero';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      myList: [],
      comMovies: [],
      selectedMovie: {},
      searchResults: []}

    this.addToList = this.addToList.bind(this);
    this.movieSelector = this.movieSelector.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  componentDidMount() {
    axios.get(`http://movied.herokuapp.com/discover`).then(res => {
      const movies = res.data;
      this.setState({ movies });
      this.movieSelector(this.state.movies[0]);
    });

    axios.get(`http://movied.herokuapp.com/categories/35`).then(res => {
      const comMovies = res.data;
      this.setState({ comMovies });
    });
    
  }

  movieSelector(movie){
    this.setState((state) => {
      return {selectedMovie: movie}
    });

  }

  searchMovies(term){
    console.log('search term' , term);
    axios.get(`http://movied.herokuapp.com/search?q=${term}`).then(res => {
      const searchResults = res.data;
      this.setState({ searchResults }); 
      console.log(searchResults)
      this.setState((state) => {
        return {selectedMovie:searchResults[0]}
      });
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

  removeFromList(movie){
    movie.myList = undefined;
    let list = this.state.myList.filter(film => film.id != movie.id);
    this.setState({myList: list});

    let comedies = this.state.comMovies;
      comedies.forEach(film => {
        if(film.id === movie.id) 
        {film.myList = undefined   }
      })

      let trending = this.state.movies;
      trending.forEach(film => {
        if(film.id === movie.id) 
        {film.myList = undefined }
      })
      this.setState({movies: trending});
      this.setState({comMovies: comedies});
  }

  render() {
    const myList = this.state.myList.length > 0 && (
      <MovieList movies={this.state.myList} 
      label={'My List'}
      movieSelector={this.movieSelector}
      removeFromList={this.removeFromList} />
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

    const searchResults = (
      <MovieList
        movieSelector={this.movieSelector}
        showAddButton={this.showAddButton}
        movies={this.state.searchResults}
        addToList={this.addToList}
        label={'Search results'}
      />
    );

    return (
      
      <div className='dashboard'>
        <Navbar searchMovies={this.searchMovies}/>
        <Hero selectedMovie={this.state.selectedMovie}/>
        <div className='dashboard-container'>
        {this.state.searchResults.length > 0 
        ? [searchResults]
        :[myList, movieList, comMovies]
      }
          
        </div>
      </div>
    );
  }
}

export default Dashboard;
