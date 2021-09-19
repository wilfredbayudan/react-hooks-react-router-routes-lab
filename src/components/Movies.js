import React from "react";
import { movies } from "../data";

const renderMovies = movies.map((movie, index) => {
  const renderGenres = movie.genres.map((genre, index) => <li key={index}>{genre}</li>)
  return (
    <div key={index}>
      <h3>{movie.title}</h3>
      <p>{movie.time} minutes</p>
      <ul>
        {renderGenres}
      </ul>
    </div>
  )
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
}

export default Movies;
