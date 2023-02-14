import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg shadow ">
            <div className="container">
                
                <NavLink className="navbar-brand" to="/"> <img src="../images/logo.png" alt="logo" id="logo" style={{ width: 50, height: 50 }}/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/about"> About </NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/matches"> Matches </NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/contact"> Contact </NavLink> </li>
                    </ul>
                    <NavLink className="navbar-brand" to="/"> Wedding Bells </NavLink>
                    <NavLink className="btn btn-outline-dark ms-auto px-4" to="/login"> <i className="fa-solid fa-right-to-bracket"> </i> Login </NavLink> 
                </div>
            </div>
        </nav>
    </div>
  );
}


export default Navbar