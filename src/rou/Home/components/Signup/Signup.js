import React from 'react';
import { connect } from 'react-redux';
import {  Form,FormGroup,Button,Col,ControlLabel,FormControl,Row  } from 'react-bootstrap';
import './Signup.scss';
import Header from '../Header/Header';
import * as action from '/home/etech/Desktop/polling/src/services/SignupServices.js';
import {signupDetailReducer} from '/home/etech/Desktop/polling/src/store/location.js';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.State={
      email:'',
      password:'',
      option:''
    }
  };
  onFormSubmit(e){
    e.preventDefault();
    // const email=e.target.elements.email.value;
    // const password=e.target.elements.password.value;
    // const option=e.target.elements.option.value;
    // this.setState({
        
    //   });
    this.props.onSignUp();
    
  }
  render(){
    console.log(this.props, '==============');
    return(
        <div>
          <Header heading='SignUp'/>
            <Row className="show-grid">
              <Col xs={6} md={4} className="signupCol">
                 <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                         Email
                         </Col>
                         <Col sm={10}>
                            <FormControl type="email" placeholder="Email" name="email"/>
                         </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                         Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" name="password" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="FormHorizontalSelect">
                         <Col componentClass={ControlLabel} sm={2}>
                          Select
                         </Col>
                         <Col sm={10}>
                              <FormControl componentClass="select" placeholder="select" name="option">
                                   <option value="Admin">Admin</option>
                                  <option value="Staff">Staff</option>
                              </FormControl>
                         </Col>
                    </FormGroup>

                    <FormGroup>
                       <Col smOffset={2} sm={10}>
                         <Button type="submit" id="signupButtom" onClick={(e)=> this.onFormSubmit(e)}>SignUp</Button>
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
  console.log(state, 'state ');
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSignUp: (e) => dispatch(action.signupapi())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);