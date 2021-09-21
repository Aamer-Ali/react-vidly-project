import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({}) => {
  return (
    // <div>
    //   <nav className="navbar navbar-light bg-light">
    //     <ul>
    //       <li>
    //         <NavLink to="/">Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/products">Products</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/posts/2021/10">Posts</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/dashboard">Dashboard</NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Vidly
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link active" to="/movies">
            Movies <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
