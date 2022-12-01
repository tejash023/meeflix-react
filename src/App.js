import { useEffect } from 'react';
import './App.css';
import SearchIcon from './searchicon.svg'
import Movie from './Movie';

const API_URL = 'http://www.omdbapi.com?apikey=197e64bb';
const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

function App() {

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Superman');
  },[]);

  return (
    <div className="app">
      <h1>MeeFlix</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value = 'Batman'
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt = 'search'
          onClick={() => {}}
        />
      </div>
      <div className='container'>
        <Movie movie1 = {movie1} />
      </div>
    </div>
    
  );
}

export default App;
