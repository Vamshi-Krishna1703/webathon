import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./main.css";
import logo from "./logo.jpg";

import { faPhone,faPager,faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation(props) {
  return (
    <div className="navigation">
      <div class="container" id="one">
      <nav class="navbar navbar-expand-lg navbar-dark ">
        
          <Link class="navbar-brand" to="/">
            <img src={logo} width= "70px"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#newbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
          <div class="collapse navbar-collapse" id="newbar">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                <FontAwesomeIcon icon={faHome}/> Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                <FontAwesomeIcon icon={faPager}/> About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                <FontAwesomeIcon icon={faPhone}/> Contact
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/newone" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/newone">
                  Newone
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default withRouter(Navigation);