import type { Component } from "solid-js";

import { Outlet, A, useNavigate } from "@solidjs/router";

import { Alert } from "@components/Alert";

import { useAppContext } from "@store";

const Layout: Component = () => {
  const navigate = useNavigate();
  const [state, { logout }] = useAppContext();

  // useEffect(() => {
  //   if (jwtToken === "") {
  //   }
  // }, []);
  return (
    <div class='container'>
      {/* begin row 1 */}
      <div class='row'>
        {/* begin col 1 */}
        <div class='col'>
          <h1 class='mt-3'>Go Watch a Movie!</h1>
        </div>
        {/* end col 1 */}
        {/* begin col 2  */}
        <div class='col text-end'>
          {state.auth.jwtToken === "" ? (
            <A href='/login'>
              <span class='badge bg-success'>Login</span>
            </A>
          ) : (
            <button
              class='btn badge bg-danger'
              onClick={() => {
                logout!();
                navigate("/login", { replace: true });
                console.log("logged out");
              }}>
              Logout
            </button>
          )}
        </div>
        {/* end col 2 */}
        <hr class='mb-3' />
      </div>
      {/* end row 1 */}

      {/* begin row 2 */}
      <div class='row'>
        {/* begin col 1 */}
        <div class='col-md-2'>
          <nav>
            <div class='list-group'>
              <A
                href='/'
                class='list-group-item list-group-item-action'
                end={true}>
                Home
              </A>
              <A
                href='/movies'
                class='list-group-item list-group-item-action'
                end={false}>
                Movies
              </A>
              <A
                href='/genres'
                class='list-group-item list-group-item-action'
                end={true}>
                Genres
              </A>
              {state.auth.jwtToken !== "" && (
                <>
                  <A
                    href='/admin/movie'
                    class='list-group-item list-group-item-action'
                    end={true}>
                    Add Movie
                  </A>
                  <A
                    href='/admin/manage-catalogue'
                    class='list-group-item list-group-item-action'
                    end={true}>
                    Manage Catalogue
                  </A>
                  <A
                    href='/admin/graphql'
                    class='list-group-item list-group-item-action'
                    end={true}>
                    GraphQL
                  </A>
                </>
              )}
            </div>
          </nav>
        </div>
        {/* end col 1 */}
        {/* begin col 2 */}
        <div class='col-md-10'>
          <Alert />
          <Outlet />
        </div>
        {/* end col 2 */}
      </div>
      {/* end row 2 */}
    </div>
  );
};

export default Layout;
