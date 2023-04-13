import { Home } from "../src/components/Home";
export default function Index() {
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
          <a href='#!'>
            <span className='badge bg-success'>Login</span>
          </a>
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
              <a href='#!' className='list-group-item list-group-item-action'>
                Home
              </a>
              <a href='#!' className='list-group-item list-group-item-action'>
                Movies
              </a>
              <a href='#!' className='list-group-item list-group-item-action'>
                Genres
              </a>
              <a href='#!' className='list-group-item list-group-item-action'>
                Add Movie
              </a>
              <a href='#!' className='list-group-item list-group-item-action'>
                Manage Catalogue
              </a>
              <a href='#!' className='list-group-item list-group-item-action'>
                GraphQL
              </a>
            </div>
          </nav>
        </div>
        {/* end col 1 */}
        {/* begin col 2 */}
        <div className='col-md-10'>
          <Home />
        </div>
        {/* end col 2 */}
      </div>
      {/* end row 2 */}
    </div>
  );
}
