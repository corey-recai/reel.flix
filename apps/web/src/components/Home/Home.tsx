import React from "react";
import Image from "next/image";
import Ticket from "../../images/movie_tickets.jpg";

export const Home = () => {
  return (
    <>
      <div className='text-center'>
        <h2>Find a movie to watch tonight</h2>
        <Image src={Ticket} alt='movie ticket' />
      </div>
    </>
  );
};
