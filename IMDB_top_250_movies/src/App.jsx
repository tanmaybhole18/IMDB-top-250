import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

 
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase()); 
  };

 
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery) 
  );

  return (
    <div>
      <h1>IMDb Top 250 Movies</h1>

      <div className="input">  
      <input 
        className="input-box"
        type="text"
        placeholder="Search Movies..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      </div>
      
      <div className="movie-grid">
        {filteredMovies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;





