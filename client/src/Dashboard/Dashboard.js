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
      myList: []
    }
  }
 

  componentDidMount() {
    axios.get(`http://movied.herokuapp.com/discover`)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
        console.log(this.state.movies);
      })
  }



  render() {
    return (
      <div className='dashboard'>
        <Navbar />

        <div className='movie_list_container'>

          this.state.movies.forEach(movie => {
            <MovieList />
          })
          
        </div>

     
      </div>
    );
  }
}

export default Dashboard;
