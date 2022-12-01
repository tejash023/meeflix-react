import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './searchicon.svg'
import Movie from './Movie';

const API_URL = 'http://www.omdbapi.com?apikey=197e64bb';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    setMovies(data.Search);
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
          value = {searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value)}}
        />
        <img 
          src={SearchIcon}
          alt = 'search'
          onClick={() => {searchMovies(searchTerm)}}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className='container'>
             {movies.map((movie) => (
               <Movie movie = {movie} />
             ))}
            </div>

          ) : 
          (

          <div className='empty'>
            <h2>No movies found!</h2>
          </div>
          )
      }
      
    </div>
    
  );
  
}

export default App;
