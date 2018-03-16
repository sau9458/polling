import axios from 'axios'
export const loginapi=()=>{
    axios.get('https://secure-refuge-14993.herokuapp.com/login?username=admin&password=admin')
  .then( (response)=> {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}