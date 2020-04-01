import React from 'react';
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar';


const Navbar = (props) => {
  return (
    <div className="navbar">
    <div className="logo_container">
     <a href=""> <div className="logo"> NOTFLIX </div></a>
      </div>
     
      <div className="search_container">
     <SearchBar searchMovies={props.searchMovies} />
   
      </div>
   </div>
  );
}

export default Navbar;