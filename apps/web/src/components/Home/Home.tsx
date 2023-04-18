import { Component } from "solid-js";
import Ticket from "../../assets/images/movie_tickets.jpg";

const Home: Component = () => {
  return (
    <>
      <div class='text-center'>
        <h2>Find a movie to watch tonight</h2>
        <img src={Ticket} alt='movie ticket' />
      </div>
    </>
  );
};

export default Home;
