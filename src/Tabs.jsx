/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo from "../../assets/images/logo.png";
// import './style.scss';
// import { NavLink } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import CampaignDetailsComponent from './CampaignDetails';
class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  handleChange() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <React.Fragment>
        <Tabs
          defaultActiveKey="upcoming"
          id="uncontrolled-tab-example"
          className="custom-tabs"
        >
          <Tab eventKey="upcoming" title="Upcoming Campaigns">
            <div class="position-relative overflow-hidden">
              <CampaignDetailsComponent
                type="upcoming"
                handleChange={this.handleChange}
              />
            </div>
          </Tab>
          <Tab eventKey="live" title="Live Campaigns">
            <div class="position-relative overflow-hidden">
              <CampaignDetailsComponent
                type="live"
                handleChange={this.handleChange}
              />
            </div>
          </Tab>
          <Tab eventKey="past" title="Past Campaigns">
            <div class="position-relative overflow-hidden">
              <CampaignDetailsComponent
                type="past"
                handleChange={this.handleChange}
              />
            </div>
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default TabComponent;
