import { Component } from "solid-js";
import { useParams } from "@solidjs/router";

import Movie from "@components/Movie";

const Index: Component = () => {
  const { id } = useParams();
  return (
    <>
      <Movie id={id as unknown as number} />
    </>
  );
};

export default Index;
