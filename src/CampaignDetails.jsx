/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo from "../../assets/images/logo.png";
// import './style.scss';
import { Table, Figure, Modal, Button, Form, Alert } from 'react-bootstrap';
import Moment from 'react-moment';
import data from './assets/data.json';
import Bitmap from './assets/images/Bitmap.png';
import Price from './assets/images/Price.png';
import statisticsreport from './assets/images/statistics-report.png';
import file from './assets/images/file.png';
import calender from './assets/images/calendar.png';
// import PriceModalComponent from './PriceModalComponent';
class CampaignDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      modalShow: false,
      modalScheduleShow: false,
      selectedData: [],
      selectedScheduleData: [],
    };
    this.handleScheduleSubmit = this.handleScheduleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(data);
    this.prepareData();
  }

  prepareData() {
    const newData = data.data.filter(item => {
      const campDate = new Date(item.campaignDate * 1000).getTime();
      const currDate = new Date().getTime();
      if (campDate > currDate && this.props.type === 'upcoming') {
        return true;
      } else if (campDate < currDate && this.props.type === 'past') {
        return true;
      } else if (campDate === currDate && this.props.type === 'live') {
        return true;
      }
    });
    this.setState({
      data: newData,
    });
  }
  handleClose = () => this.setState({ modalShow: false });
  handleShow = item => this.setState({ modalShow: true, selectedData: item });
  handleScheduleClose = () => this.setState({ modalScheduleShow: false });
  handleScheduleShow = item =>
    this.setState({ modalScheduleShow: true, selectedScheduleData: item });

  modal() {
    return (
      <Modal show={this.state.modalShow} onHide={this.state.modalClose}>
        <Modal.Body>
          {' '}
          <Figure>
            <Figure.Image
              width={200}
              height={200}
              alt={this.state.selectedData.name}
              src={Bitmap}
            />
            <Figure.Caption>
              {this.state.selectedData.name}
              <br />
              {this.state.selectedData.region}
            </Figure.Caption>
          </Figure>
          <h2>Pricing</h2>
          {this.state.selectedData.price}
        </Modal.Body>
        <Button
          variant="primary"
          onClick={this.handleClose}
          className="modal-btn"
        >
          Close
        </Button>
      </Modal>
    );
  }
  modalSchedule() {
    return (
      <Modal
        show={this.state.modalScheduleShow}
        onHide={this.state.modalScheduleClose}
      >
        <Modal.Body>
          {' '}
          <h2>Schedule Again</h2>
          <Form onSubmit={this.handleScheduleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Select Date</Form.Label>
              <Form.Control type="date" id="date" placeholder="Select Date" />
              <Form.Control
                type="hidden"
                id="name"
                value={this.state.selectedScheduleData.name}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="modal-btn">
              Submit
            </Button>
            <Button
              variant="secondary"
              onClick={this.handleScheduleClose}
              className="modal-btn"
              style={{ marginLeft: '10px' }}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  handleScheduleSubmit(e) {
    this.setState({ loading: true });
    console.log(this);
    console.log(e.target.date.value);
    this.state.data.map(item => {
      if (item.name === e.target.name.value) {
        item.campaignDate = new Date(e.target.date.value).getTime() / 1000;
      }
    });
    this.handleScheduleClose();
    this.prepareData();
    // this.props.handleChange();
    console.log(this.state.data);
    // let data = {
    //   email: e.target.inputEmail.value,
    //   password: e.target.inputPassword.value,
    // };
    // if (data) {
    //   console.log('dhdhd22');
    // }
    e.preventDefault();
  }
  render() {
    if (this.state.data.length) {
      return (
        <React.Fragment>
          {/* {this.props.type} */}
          <Table responsive className="custom-table mt-5">
            <thead>
              <tr>
                <th>Date</th>
                <th>Campaign</th>
                <th>View</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => (
                <tr>
                  <td>
                    {this.getFormattedDate(item.campaignDate)}
                    <br />
                    <span>{this.getDateDiff(item.campaignDate)}</span>
                  </td>
                  <td>{this.getCampaignDiv(item.name, item.region)}</td>
                  <td>
                    <Button
                      variant="default"
                      onClick={this.handleShow.bind(this, item)}
                    >
                      <img
                        src={Price}
                        width="20"
                        alt="View Pricing"
                        style={{ paddingRight: '5px' }}
                      />
                      View Pricing
                    </Button>
                  </td>
                  <td>
                    <span style={{ paddingRight: '50px' }}>
                      <img
                        src={statisticsreport}
                        width="20"
                        alt="Report"
                        style={{ paddingRight: '5px' }}
                      />
                      Report
                    </span>
                    <span style={{ paddingRight: '50px' }}>
                      <img
                        src={file}
                        width="20"
                        alt="CSV"
                        style={{ paddingRight: '5px' }}
                      />
                      CSV
                    </span>
                    <Button
                      variant="default"
                      onClick={this.handleScheduleShow.bind(this, item)}
                      style={{ paddingRight: '50px' }}
                    >
                      <img
                        src={calender}
                        width="20"
                        alt="Schedule Again"
                        style={{ paddingRight: '5px' }}
                      />
                      Schedule Again
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {this.modal()}
          {this.modalSchedule()}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Alert variant="warning">Nothing to show</Alert>
        </React.Fragment>
      );
    }
  }

  getCampaignDiv(name, region) {
    return (
      <Figure>
        <Figure.Image width={40} height={80} alt={name} src={Bitmap} />
        <Figure.Caption>
          {name}
          <br />
          {region}
        </Figure.Caption>
      </Figure>
    );
  }

  getFormattedDate(date) {
    return (
      <Moment unix format="MMM YYYY, DD ">
        {date}
      </Moment>
    );
  }

  getDateDiff(date) {
    const campDate = new Date(date * 1000).getTime();
    const currDate = new Date().getTime();

    const diffTime = Math.abs(campDate - currDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (campDate > currDate) {
      return (
        <span style={{ fontSize: '12px' }}>{diffDays + ' day(s) ahead'}</span>
      );
    } else {
      return (
        <span style={{ fontSize: '12px' }}>{diffDays + ' day(s) ago'}</span>
      );
    }
  }
}

export default CampaignDetailsComponent;
