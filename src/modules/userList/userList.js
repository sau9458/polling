import React from 'react';
import {Table,} from 'react-bootstrap';
import Header from '../header/header'
import  BASE_URL  from '../../config/config';
import './userList.scss';
var id=0;
 class UserList extends React.Component{
    constructor(){
        super();
        this.state={
          data:[],
        }
      }
      componentDidMount(){
        fetch(`${BASE_URL.URL}list_users`).
        then((Response)=>Response.json()).
        then((apiResponse)=>
        {
          this.setState({
            data:apiResponse.data,
          })
        })
      } 
      render(){
        return(
          <div>
            <Header heading="User List" />
              <Table striped bordered condensed hover className="user">
                <thead>
                  <tr>
                    <th>USER NAME</th>
                    <th>ROLE</th>
                  </tr>
                </thead>
                <tbody>
                   { 
                       this.state.data.map((dynamicData,key) =>
                       <tr>
                         <td>{dynamicData.username}</td>
                         <td>{dynamicData.role}</td>
                       </tr>
                          )
                   }
               </tbody>
             </Table>
          </div>
            
        )
      }
 }

 export default UserList;