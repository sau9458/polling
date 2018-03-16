import React from 'react'
import './homeView.scss'
import { Button,ButtonToolbar,Grid,Row,Col } from 'react-bootstrap';


export class HomeView extends React.Component{
  constructor(props){
    super(props);
    
  }
signup=(e)=>{
  e.preventDefault();
  this.props.router.push('/signup');
}
login=(e)=>{
  e.preventDefault();
  this.props.router.push('/login');
}
  render(){
    
    return(
  <Grid >
     <Row className="show-grid xs={6}">
     <Col className="homepage" xs={3} md={5}>
     
    <h1 className="heading" >Polling System</h1><br/>
    
    
    <Button bsStyle="primary" className="signup" onClick={this.signup}>Sign Up</Button>
    <Button bsStyle="info" className="login" onClick={this.login}>Login</Button>
  
      </Col>
</Row>
  </Grid>
    )
  }
}

export default HomeView
