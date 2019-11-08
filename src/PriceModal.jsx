/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo from "../../assets/images/logo.png";
// import './style.scss';
import { Figure, Modal, Button } from 'react-bootstrap';

import Bitmap from './assets/images/Bitmap.png';

class PriceModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      modalShow: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Modal show={this.props.modalShow} onHide={this.props.handleClose}>
          <Modal.Body>
            <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt={this.props.item.name}
                src={Bitmap}
              />
              <Figure.Caption>
                {this.props.item.name}
                <br />
                {this.props.item.region}
              </Figure.Caption>
            </Figure>
            <h2>Pricing</h2>
            {this.props.item.price}
          </Modal.Body>
          <div>
            <Button variant="default" onClick={this.props.handleClose}>
              Close
            </Button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PriceModalComponent;
