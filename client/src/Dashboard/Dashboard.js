import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';
import MovieList from '../MovieList/MovieList';
import Hero from '../Hero/Hero';
import axios from 'axios';

const Dashboard = () => {
  
    const [movies, setMovies ] = useState([]);
    const [myList, setMyList ] = useState( []);
    const [comMovies, setComMovies ] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [searchResults, setSearchResults] = useState({});
      
    useEffect(() => {
      
      axios.get(`https://movied.herokuapp.com/discover`).then(res => {
        const movies = res.data;
        setMovies(movies);
        movieSelector(movies[0]);
      });
  
      axios.get(`https://movied.herokuapp.com/categories/35`).then(res => {
        const comMovies = res.data;
        setComMovies(comMovies);
      });

      localStorage.getItem('myList') && setMyList(JSON.parse(localStorage.getItem('myList'))); 

    }, []);

    useEffect(() => {

      localStorage.setItem('myList', JSON.stringify(myList));
    
    },[myList])

  const movieSelector = (movie) =>{
    setSelectedMovie(movie);
  }

  const searchMovies = (term) => {
   
    axios.get(`https://movied.herokuapp.com/search?q=${term}`).then(res => {
      const results = res.data;
      setSearchResults(() => results); 
      setSelectedMovie(results[0]);
    });
  }

  const addToList = (movie) => {

    movie.myList = true;

    !myList.includes(movie) &&
      setMyList([...myList, movie]);

    let comedies = comMovies;
      comedies.forEach(film => {
        if(film.id === movie.id) 
        {film.myList = true }
      })

      let trending = movies;
      trending.forEach(film => {
        if(film.id === movie.id) 
        {film.myList = true}
      })
      setMovies(trending);
      setComMovies(comedies);
  }

  const removeFromList = (movie) => {
    movie.myList = undefined;
    let list = myList.filter(film => film.id != movie.id);
    setMyList(list);

    let comedies = comMovies;
      comedies.forEach(film => {
        if(film.id === movie.id) 
        {film.myList = undefined   }
      })

      let trending = movies;
      trending.forEach(film => {
        if(film.id === movie.id) 
        {film.myList = undefined }
      })
      setMovies(trending);
      setComMovies(comedies);
  }

  
    const myMovieList = myList.length > 0 && (
      <MovieList movies={myList} 
      label={'My List'}
      movieSelector={movieSelector}
      removeFromList={removeFromList} />
    );

    const movieList = (
      <MovieList
        movieSelector={movieSelector}
       
        movies={movies}
        addToList={addToList}
        label={'Trending now'}
      />
    );

    const comedyMovies = (
      <MovieList
        movieSelector={movieSelector}
       
        movies={comMovies}
        addToList={addToList}
        label={'Comedy'}
      />
    );

    const userSearchResults = (
      <MovieList
        movieSelector={movieSelector}
        
        movies={searchResults}
        addToList={addToList}
        label={'Search results'}
      />
    );

    return (
      
      <div className='dashboard'>
        <Navbar searchMovies={searchMovies}/>
        <Hero selectedMovie={selectedMovie}/>
        <div className='dashboard-container'>
        {searchResults.length > 0 
        ? [userSearchResults]
        :[myMovieList, movieList, comedyMovies]
      }
          
        </div>
      </div>
    );
  }


export default Dashboard;
