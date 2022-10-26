import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar (){

    const [showNav,setShowNav] = useState(false);

  function handleCLick(e){
    e.preventDefault();
    setShowNav(!showNav);
  }

    return(

      <nav className="main_nav navbar-static-top">
        <div className="nav_title">
          <h2>reckon</h2>
        </div>
        <div className={showNav ? "nav_items mobile-nav-menu" : "nav_items"} >
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/jobs">Jobs</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            {/* <li><NavLink to="/about">About US</NavLink></li> */}
          </ul>
        </div>
        <div className={showNav ? "nav_login" : "nav_login"}>
          <ul>
            <li><NavLink to="/signin">Login</NavLink></li>
            <li><NavLink to="/signup">SignUp</NavLink></li>
            {/* <li><NavLink to="/logout">Logout</NavLink></li> */}
            <li><NavLink to="admin/login">Admin</NavLink></li>
          </ul>

          <div className="hamburger-menu">
               <a href="#" onClick={handleCLick}><GiHamburgerMenu /></a> 
          </div>
        </div>
      </nav>
    );
}

export default Navbar;