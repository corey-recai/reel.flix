import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../store/auth";

import type { RootState } from "../../store";
import { Alert } from "../Alert";

export const Layout = ({ children }) => {
  const router = useRouter();
  const jwtToken = useSelector((state: RootState) => state.auth.jwtToken);
  const dispatch = useDispatch();

  console.info(jwtToken);

  return (
    <div className='container'>
      {/* begin row 1 */}
      <div className='row'>
        {/* begin col 1 */}
        <div className='col'>
          <h1 className='mt-3'>Go Watch a Movie!</h1>
        </div>
        {/* end col 1 */}
        {/* begin col 2  */}
        <div className='col text-end'>
          {jwtToken === "" ? (
            <Link href='/login'>
              <span className='badge bg-success'>Login</span>
            </Link>
          ) : (
            <button
              className='btn badge bg-danger'
              onClick={() => {
                dispatch(logout());
                router.push("/login");
              }}>
              Logout
            </button>
          )}
        </div>
        {/* end col 2 */}
        <hr className='mb-3' />
      </div>
      {/* end row 1 */}

      {/* begin row 2 */}
      <div className='row'>
        {/* begin col 1 */}
        <div className='col-md-2'>
          <nav>
            <div className='list-group'>
              <Link href='/' className='list-group-item list-group-item-action'>
                Home
              </Link>
              <Link
                href='/movies'
                className='list-group-item list-group-item-action'>
                Movies
              </Link>
              <Link
                href='/genres'
                className='list-group-item list-group-item-action'>
                Genres
              </Link>
              {jwtToken !== "" && (
                <>
                  <Link
                    href='/admin/movie'
                    className='list-group-item list-group-item-action'>
                    Add Movie
                  </Link>
                  <Link
                    href='/admin/manage-catalogue'
                    className='list-group-item list-group-item-action'>
                    Manage Catalogue
                  </Link>
                  <Link
                    href='/admin/graphql'
                    className='list-group-item list-group-item-action'>
                    GraphQL
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
        {/* end col 1 */}
        {/* begin col 2 */}
        <div className='col-md-10'>
          <Alert />
          {children}
        </div>
        {/* end col 2 */}
      </div>
      {/* end row 2 */}
    </div>
  );
};
