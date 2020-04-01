
import React, { useEffect, useState } from 'react';
import './Movie.css';

const Movie = (props) => {
 
  
  const [ isHovered, setIsHovered ] = useState(false);

  const clickHandler = () => {
    !props.myList &&
    props.addToList(props.movie);
    
  }

  const minusHandler = () => {
    props.removeFromList(props.movie);
    setIsHovered(false);

  }

  const hoverHandler = () => {
    showAddButton();
    props.movieSelector(props.movie);
  }

  const showAddButton = () => {
    setIsHovered(!isHovered);
  }

  const truncatedTitle = (title) => {
    const num = 25;
    return (title.length <= num )
    ? title
    : title.slice(0, num) + '...'
  }


    return (
      <div className="movie_card" 
        
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}> 
       <img 
        id="poster"
        className="poster" 
        src={props.img ? `https://image.tmdb.org/t/p/w300/${props.img}` : 'https://uploads.guim.co.uk/2020/03/31/New_Project.png'}
        alt={`Movie poster for ${props.title}`}></img>

      {(props.myList === undefined && isHovered ) ?
      <svg onClick={props.feed !== 'My List' ? clickHandler : undefined} className="add" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="11.5" cy="11.5" r="11.5" stroke="#fff"/><g stroke="#e0e0e0" strokeLinecap="square"><path d="m11.5 6.5v10"/><path d="m16.5 11.5h-10"/></g></g></svg>
    : null  
    }
      {(isHovered && props.myList) ?
      <svg className="add" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle cx="12.5" cy="12.5" r="11.5" stroke="#fff"/><g stroke="#e0e0e0" strokeLinecap="square" transform="translate(7 6)"><path d="m.93453544 6.00041853 3.62618582 5.59960937"/><path d="m9.63738142 1.20075335-5.07666016 10.39927455"/></g></g></svg>
      : null }
      {(isHovered && props.myList && props.feed === "My List") ?
      <svg  onClick={minusHandler} className="minus" viewbox="0 0 25 25">
      <circle cx="12.5" cy="12.5" r="12" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <line x1="6" y1="12.5" x2="19" y2="12.5"  fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
      : null }

  <div className="title">{truncatedTitle(props.title)}</div> 
  

   </div>
   
    );
  }


export default Movie;