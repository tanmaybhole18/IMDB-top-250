import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>IMDb Top 250 Movies</h1>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
