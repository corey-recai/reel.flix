import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        release_date: 1994,
        runtime: 116,
        mpaa_rating: "PG-13",
        description: "The Shawshank Redemption",
      },
      {
        id: 2,
        title: "The Godfather",
        release_date: 1972,
        runtime: 116,
        mpaa_rating: "PG-13",
        description: "The Godfather",
      },
      {
        id: 3,
        title: "The Godfather: Part II",
        release_date: 1974,
        runtime: 116,
        mpaa_rating: "PG-13",
        description: "The Godfather: Part II",
      },
      {
        id: 4,
        title: "The Dark Knight",
        release_date: 2008,
        runtime: 116,
        mpaa_rating: "PG-13",
        description: "The Dark Knight",
      },
      {
        id: 5,
        title: "12 Angry Men",
        release_date: 1957,
        runtime: 116,
        mpaa_rating: "PG-13",
        description: "12 Angry Men",
      },
      {
        id: 6,
        title: "The Lord of the Rings: The Return of the King",
        release_date: 1972,
        runtime: 116,
        mpaa_rating: "PG-13",
        description: "The Lord of the Rings: The Return of the King",
      },
    ];
    setMovies(moviesList);
  }, []);

  return (
    <>
      <div>
        <h2>Movies</h2>
        <hr />
        <table className='table table-stripped table-hover'>
          <thead>
            <tr>
              <th>Movie</th>
              <th>Release Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>
                  <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td>{movie.release_date}</td>
                <td>{movie.mpaa_rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
