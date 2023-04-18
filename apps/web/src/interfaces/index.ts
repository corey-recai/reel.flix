import { Component, JSX } from "solid-js";

export type ComponentWithChildren = Component<{
  name?: String;
  children: JSX.Element;
}>;

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  runtime: number;
  mpaa_rating: string;
  description: string;
}
