import React from 'react';
import { connect } from 'react-redux';
import {  Form,FormGroup,Button,Col,ControlLabel,FormControl,Row,Alert} from 'react-bootstrap';
import './signUp.scss';
import Header from '../header/header';
import * as action from '../../redux/signUp/action';
import AlertExample from '../alert/alert'

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      option:'admin'
    }
  };
  onFormSubmit(e){
    e.preventDefault();
    let data1={
      'username':this.state.username,
      'password':this.state.password,
      'option':this.state.option
        }
     this.props.onSignUp(data1);
    }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleOptionChange=(e)=>{
   this.setState({option:e.target.value})
 }

  componentWillReceiveProps(props){
    if(props.signUp.error === 1){
      this.setState({
        alert:true
      })
    }
    
    else if(props.signUp.error===0){ 
      this.setState({
        alerts:true
      },setTimeout(()=>{
        this.props.router.push('/login');
      },2000))
      
    }
    
    console.log(props,this.props,'componentwillreceieveprops');
  }

  render(){
    return(
        <div>
          <Header heading='SignUp'/>
         {this.state.alert? <AlertExample alertmsg="Account already exist"/>:''}
         {this.state.alerts? <AlertExample alertmsg="Success Signup"/>:''}

            <Row className="show-grid">
              <Col xs={6} md={4} className="signupCol">
                 <Form onSubmit={(e)=> this.onFormSubmit(e)} horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                         Email
                         </Col>
                         <Col sm={10}>
                            <FormControl type="text" placeholder="Email" name="email" required value={this.state.username} onChange={this.handleUsernameChange}/>
                         </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                         Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" name="password"  required value={this.state.password} onChange={this.handlePasswordChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="FormHorizontalSelect">
                         <Col componentClass={ControlLabel} sm={2}>
                          Select
                         </Col>
                         <Col sm={10}>
                              <FormControl componentClass="select" placeholder="select" name="option" value={this.state.option} onChange={this.handleOptionChange}>
                                   <option value="admin">Admin</option>
                                  <option value="staff">Staff</option>
                              </FormControl>
                         </Col>
                    </FormGroup>

                    <FormGroup>
                       <Col smOffset={2} sm={10}>
                         <Button type="submit" id="signupButtom" >SignUp</Button>
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
    signUp: state.signUp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSignUp: (e) => dispatch(action.requestSignUp(e))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);