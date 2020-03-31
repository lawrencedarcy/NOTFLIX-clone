import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor (props){
    super(props);
    
    this.state = {value: ''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.searchMovies(this.state.value);
    this.setState({value: ''});
    return false;
  }

  render() {
    return (
      <div>
       <form className="search-bar" 
       id="searchform"  
       onSubmit={this.onFormSubmit}> 
       <input
          onChange={this.handleChange}
          value={this.state.value}
          type="text"
          className="input"
          id="searchMovie"
          placeholder="Search movies..."
        />
       {/*  <button  type="submit" className="search_button" >
         Search
        </button>  */}
      </form>
      </div>
    );
  }
}

export default SearchBar;