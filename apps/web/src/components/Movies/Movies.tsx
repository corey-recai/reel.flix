import { Component, createSignal, For, onMount } from "solid-js";
import { A } from "@solidjs/router";

import type { Movie } from "@interfaces";

const Movies: Component = () => {
  const [movies, setMovies] = createSignal<Movie[]>([]);

  onMount(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch("http://localhost:8080/movies", requestOptions)
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <>
      <div>
        <h2>Movies</h2>
        <hr />
        <table class='table table-stripped table-hover'>
          <thead>
            <tr>
              <th>Movie</th>
              <th>Release Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <For each={movies()}>
              {movie => (
                <tr>
                  <td>
                    <A href={`/movies/${movie.id}`}>{movie.title}</A>
                  </td>
                  <td>{movie.release_date}</td>
                  <td>{movie.mpaa_rating}</td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Movies;
