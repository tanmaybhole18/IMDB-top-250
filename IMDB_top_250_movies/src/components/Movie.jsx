import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image_url} alt={movie.name} />
      <h2>{movie.name} ({movie.year})</h2>
      <p>⭐ {movie.rating}</p>
      <p><strong>Genre:</strong> {movie.genre.join(", ")}</p>
      <p><strong>Director:</strong> {movie.directors.join(", ")}</p>
      <p><strong>Actors:</strong> {movie.actors.join(", ")}</p>
      <p>{movie.desc}</p>
      <a href={`https://www.imdb.com${movie.imdb_url}`} target="_blank" rel="noopener noreferrer">View on IMDb</a>
    </div>
  );
};

export default Movie;
