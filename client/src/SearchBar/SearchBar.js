import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
       <form className="search-bar" id="searchform">
       <input
          type="text"
          className="input"
          id="searchMovie"
          placeholder="Search movies..."
        />
{/*         <button className="search_button" >
         Search
        </button> */}
      </form>
      </div>
    );
  }
}

export default SearchBar;