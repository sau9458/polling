import axios from 'axios'
import BASE_URL from '../config/config'
export const loginapi=()=>{
    axios.get(`${BASE_URL.URL}login?username=admin&password=admin`)
  .then( (response)=> {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}