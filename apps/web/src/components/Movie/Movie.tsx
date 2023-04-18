import { Component, createSignal, onMount } from "solid-js";

import type { Movie } from "@interfaces";

interface Props {
  id: number;
}

const MovieDetials: Component<Props> = ({ id }) => {
  const [movie, setMovie] = createSignal<Movie | {}>({});

  onMount(() => {
    let currentMovie = {
      id: 1,
      title: "The Shawshank Redemption",
      release_date: "1994",
      runtime: 116,
      mpaa_rating: "PG-13",
      description: "The Shawshank Redemption",
    };
    setMovie(currentMovie);
  });

  // useEffect(() => {

  // }, [id]);
  return (
    <>
      <div>
        <h2>Movie: {(movie() as Movie).title}</h2>
        <small>
          <em>
            {(movie() as Movie).release_date}, {(movie() as Movie).runtime},{" "}
            {(movie() as Movie).mpaa_rating}
          </em>
        </small>
        <hr />
        <p>{(movie() as Movie).description}</p>
      </div>
    </>
  );
};

export default MovieDetials;
