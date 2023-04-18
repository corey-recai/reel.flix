import type { Component } from "solid-js";
import { Router, useRoutes } from "@solidjs/router";

import { Provider } from "@store";

import { routes } from "@routes";

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <>
      <Provider>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </>
  );
};

export default App;
