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
      
    }

    this.showAddButton = this.showAddButton.bind(this);
    this.addToList = this.addToList.bind(this);
  }
 

  componentDidMount() {
    axios.get(`http://movied.herokuapp.com/discover`)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
        console.log(this.state.movies);
      })
  }

  showAddButton(){

  }

  addToList(movie){
    this.setState({myList: [...this.state.myList, movie]});
    this.setState({movies: this.state.movies.filter(film => film.id !== movie.id)});
  }




  render() {
    const myList =  this.state.myList.length > 0 && 
      <MovieList movies={this.state.myList} />
    

    return (
      <div className='dashboard'>
        <Navbar />

       <div className='dashboard-container'>

        
       {myList}
       <MovieList movies={this.state.movies} addToList={this.addToList}/>
       
      
       </div>
         

     
      </div>
    );
  }
}

export default Dashboard;
