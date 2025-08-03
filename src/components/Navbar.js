import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";


  const Navbar = (props) => {
    return (
           <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtills</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
      
      </ul>
    <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>
    );
};
Navbar.propTypes= {
   title: PropTypes.string,
   home: PropTypes.string,
};

Navbar.defaultProps= {
    title:"Navbar",
    home: 'home',
};


export default Navbar;

