/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo from "../../assets/images/logo.png";
// import './style.scss';
// import { NavLink } from 'react-router-dom';

function HeaderComponent() {
  return (
    <React.Fragment>
      <header>
        <nav className="site-header sticky-top py-3">
          <div class="container d-flex flex-column flex-md-row justify-content-between">
            <h1>Blue Stack</h1>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default HeaderComponent;
