import React from 'react';
import { Alert} from 'react-bootstrap';
import './alert.scss'
class AlertMsg extends  React.Component{

    render(){
        return(
            <div>
            <Alert bsStyle="warning" id="alert">
               {this.props.alert}
            </Alert>;
            </div>
        );
    }
} 

export default AlertMsg;