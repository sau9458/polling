import React from 'react';
import { connect } from 'react-redux';
import {  Form,FormGroup,Button,Col,ControlLabel,FormControl,Row  } from 'react-bootstrap';
import './login.scss';
import Header from '../header/header';
import * as action from '/home/etech/Desktop/polling/src/services/LoginServices';
class Login extends React.Component{
constructor(props){
  super(props)
  this.state={
    email:'',
    password:''
   }
 }
 onLoginSubmit(e){
   e.preventDefault();
   this.props.onLogin();
 }
    render(){
      console.log(this.props);
        return(
            <div>
              <Header heading='Login'/>
                 <Row className="show-grid">
                   <Col xs={6} md={4} className="loginCol">
                     <Form horizontal>
                       <FormGroup controlId="formHorizontalEmail">
                         <Col componentClass={ControlLabel} sm={2}>
                         Email
                         </Col>
                         <Col sm={10}>
                           <FormControl type="email" placeholder="Email" />
                         </Col>
                       </FormGroup>

                       <FormGroup controlId="formHorizontalPassword">
                         <Col componentClass={ControlLabel} sm={2}>
                           Password
                         </Col>
                         <Col sm={10}>
                           <FormControl type="password" placeholder="Password" />
                         </Col>
                       </FormGroup>
                       <FormGroup>
                         <Col smOffset={2} sm={10}>
                           <Button type="submit" id="loginButtom" onClick={(e)=> this.onLoginSubmit(e)}>
                           Login
                           </Button>
                         </Col>
                       </FormGroup>
                    </Form>
                  </Col>
                </Row>
            </div>
        );
    }
}

export function mapStateToProps(state) {
  console.log(state, 'state ================');
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (e) => dispatch(action.loginapi())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);