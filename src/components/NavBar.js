import React, {Component} from "react";
//import {Link} from 'react-router-dom';
import { Link, } from "react-scroll"


export class NavBar extends Component {

  render(){
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black" style={{top: '0px'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" activeClass="active" 
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={100} >Aryaman</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{scrollHeight: '100px'}}>
        <li className="nav-item mx-2">
          <Link className="nav-link" activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100} aria-current="page">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}>About</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}>Skills</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}>Projects</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
} }

export default NavBar;
