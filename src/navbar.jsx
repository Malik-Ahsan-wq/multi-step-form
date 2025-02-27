import React from 'react'
import {NavLink} from "react-router-dom"
function Navbar(){
return (
  <div>
    <nav>
      <NavLink to="/home">
        <li>Home</li>
      </NavLink>
      <NavLink to="/login">
        <li>Login</li>
      </NavLink>
      
    </nav>
  </div>
);
}

export default Navbar;