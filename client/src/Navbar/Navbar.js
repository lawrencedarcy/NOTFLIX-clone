import React, { Component } from 'react';
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
       <div className="logo_container">
        <a href="/"> <div className="logo"> NOTFLIX </div></a>
         </div>
        
         <div className="search_container">
        <SearchBar searchMovies={this.props.searchMovies} />
      
         </div>
      </div>
    );
  }
}

export default Navbar;