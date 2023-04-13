import React from "react";
import Link from "next/link";

export const Layout = ({ children }) => {
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
          <Link href='#!'>
            <span className='badge bg-success'>Login</span>
          </Link>
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
              <Link
                href='/admin/movie/0'
                className='list-group-item list-group-item-action'>
                Add Movie
              </Link>
              <Link
                href='/admin'
                className='list-group-item list-group-item-action'>
                Manage Catalogue
              </Link>
              <Link
                href='/graphql'
                className='list-group-item list-group-item-action'>
                GraphQL
              </Link>
            </div>
          </nav>
        </div>
        {/* end col 1 */}
        {/* begin col 2 */}
        <div className='col-md-10'>{children}</div>
        {/* end col 2 */}
      </div>
      {/* end row 2 */}
    </div>
  );
};
