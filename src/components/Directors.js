import React from "react";
import { directors } from "../data";

const renderDirectors = directors.map((director, index) => {
  const renderMovies = director.movies.map((movie, index) => {
    return <li key={index}>{movie}</li>
  })

  return (
    <div key={index}>
      <h3>{director.name}</h3>
      <ul>
        {renderMovies}
      </ul>
    </div>
  )
})

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors;
