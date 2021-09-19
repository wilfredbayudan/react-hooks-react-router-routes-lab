import React from "react";
import { actors } from "../data";

const renderActors = actors.map((actor, index) => {
  const renderMovies = actor.movies.map((movie, index) => <li key={index}>{movie}</li>)

  return (
    <div key={index}>
      <h3>{actor.name}</h3>
      <ul>
        {renderMovies}
      </ul>
    </div>
  )
})

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
}

export default Actors;
