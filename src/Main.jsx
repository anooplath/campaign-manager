/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo from "../../assets/images/logo.png";
// import './style.scss';
// import { NavLink } from 'react-router-dom';
import TabsComponent from './Tabs';
function MainComponent() {
  return (
    <React.Fragment>
      <main>
        <div className="container">
          <h1 className="mt-5 mb-5">Manage Campaigns</h1>
          <TabsComponent />
          {/* <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"></div> */}
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainComponent;
