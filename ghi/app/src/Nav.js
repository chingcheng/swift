import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* <li className="nav-item">
              <NavLink className="nav-link" to="">Customer</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesrecord/history">Sales Record History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesrecord">Sales Record</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesrecord/new">Create a Sales Record Form</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/salesperson/new">Create a Sales Person</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/customer/new">Create a Customer </NavLink>
            </li>



          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
