import React, { useState, useEffect } from "react";

export const Movie = ({ id }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    let currentMovie = {
      id: 1,
      title: "The Shawshank Redemption",
      release_date: 1994,
      runtime: 116,
      mpaa_rating: "PG-13",
      description: "The Shawshank Redemption",
    };
    setMovie(currentMovie);
  }, [id]);
  return (
    <>
      <div>
        <h2>Movie: {movie.title}</h2>
        <small>
          <em>
            {movie.release_date}, {movie.runtime}, {movie.mpaa_rating}
          </em>
        </small>
        <hr />
        <p>{movie.description}</p>
      </div>
    </>
  );
};
