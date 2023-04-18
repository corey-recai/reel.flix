import { lazy } from "solid-js";

const home = {
  path: "/",
  component: lazy(() => import("@pages")),
};

const movies = {
  path: "/movies",
  children: [
    {
      path: "/",
      component: lazy(() => import("@pages/movies")),
    },
    {
      path: "/:id",
      component: lazy(() => import("@pages/movies/[id]")),
    },
  ],
};

const genres = {
  path: "/genres",
  component: lazy(() => import("@pages/genres")),
};

const admin = {
  path: "/admin",
  children: [
    {
      path: "/",
      component: lazy(() => import("@pages/admin")),
    },
    {
      path: "/graphql",
      component: lazy(() => import("@pages/admin/graphql")),
    },
    {
      path: "/manage-catalogue",
      component: lazy(() => import("@pages/admin/manage-catalogue")),
    },
    {
      path: "/movie",
      component: lazy(() => import("@pages/admin/movie")),
    },
  ],
};

const login = {
  path: "/login",
  component: lazy(() => import("@pages/login")),
};

export const routes = [
  {
    path: "/",
    component: lazy(() => import("@components/Layout")),
    children: [home, admin, genres, login, movies],
  },
  {
    path: "/*",
    component: lazy(() => import("@components/Error")),
  },
];
