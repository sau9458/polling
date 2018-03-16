import React from 'react';
import { connect } from 'react-redux';
import {  Form,FormGroup,Button,Col,ControlLabel,FormControl,Row  } from 'react-bootstrap';
import './login.scss';
import Header from '../header/header';
import * as action from '../../redux/login/action';
import AlertExample from '../alert/alert'
import  * as jwt from 'jwt-simple';



class Login extends React.Component{
constructor(props){
  super(props)
  this.state={
    username:'',
    password:''
   }
 }
 onLoginSubmit(e){
   e.preventDefault();
   let dataLogin={
    'username':this.state.username,
    'password':this.state.password,
      }
   this.props.onLogin(dataLogin);
 }


 
 handleUsernameChange = (e) => {
  this.setState({username: e.target.value});
}

handlePasswordChange = (e) => {
  this.setState({password: e.target.value});
}

componentWillReceiveProps(props){
 
  if(props.login.error === 1){
    this.setState({
      loginAlert:true
    })
  }
  else if(props.login.error===0){ 
    this.setState({
      loginAlerts:true
    },setTimeout(()=>{
      this.props.router.push('/userlist');
    },2000))
  }
  
  console.log(props,this.props,'componentwillreceieveprops');
}
    render(){
        return(
            <div>
              <Header heading='Login'/>
              {this.state.loginAlert? <AlertExample alertmsg="Account doest exist"/>:''}
               {this.state.loginAlerts? <AlertExample alertmsg="Success Login"/>:''}

                 <Row className="show-grid">
                   <Col xs={6} md={4} className="loginCol">
                     <Form horizontal  onSubmit={(e)=> this.onLoginSubmit(e)}>
                       <FormGroup controlId="formHorizontalEmail">
                         <Col componentClass={ControlLabel} sm={2}>
                         Email
                         </Col>
                         <Col sm={10}>
                           <FormControl type="text" placeholder="Email" onChange={this.handleUsernameChange} />
                         </Col>
                       </FormGroup>

                       <FormGroup controlId="formHorizontalPassword">
                         <Col componentClass={ControlLabel} sm={2}>
                           Password
                         </Col>
                         <Col sm={10}>
                           <FormControl type="password" placeholder="Password"onChange={this.handlePasswordChange} />
                         </Col>
                       </FormGroup>
                       <FormGroup>
                         <Col smOffset={2} sm={10}>
                           <Button type="submit" id="loginButtom">
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
  return {
    login:state.login
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (e) => dispatch(action.requestLogin(e))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);