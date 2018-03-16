import React from 'react';
import { Alert } from 'reactstrap';
import './alert.scss'
// import { TIMEOUT } from 'dns';

class AlertExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
        TIMEOUT:1000
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert  isOpen={this.state.visible} toggle={this.onDismiss} id="alert">
        {this.props.alertmsg}
      </Alert>
    );
  }
}

export default AlertExample;