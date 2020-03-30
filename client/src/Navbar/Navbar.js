import React, { Component } from 'react';
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
       <div className="logo_container">
         <div className="logo"> NOTFLIX </div>
         </div>
        
         <div className="search_container">
        <SearchBar />
      
         </div>
      </div>
    );
  }
}

export default Navbar;