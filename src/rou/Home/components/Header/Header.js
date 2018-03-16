import React from 'react'
import { Navbar  } from 'react-bootstrap';
import './Header.scss'
class Header extends React.Component{
    render(){
        return(
            <div>
            <div className="header">
           <p className="textHeading">{this.props.heading}</p>
            </div>
              
            </div>
        );
    }
}

export default Header;