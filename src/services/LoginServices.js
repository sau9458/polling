import axios from 'axios'
import BASE_URL from '../config/config'
export const loginApi = (dataLogin) => {
  return fetch(`${BASE_URL.URL}login?username=${dataLogin.username}&password=${dataLogin.password}`).then((response) => {
    if (response.status === 500) {
      return new Promise((resolve, reject) => {
        response.json().then((data) => {
          reject(data);
        });
      });
    } else if (response.status === 401) {
      confirm('401 Access Denied !', '<span style="color:#f27474;font-size:18px;font-weight:600">' + action + '</span><br/>You are unauthorized to the Action - Contact Admin!!', 'error').then((res) => {
        resetLoggedUser();
        location.href = CONFIG.BASE_URL;
      });
    } else {
      return response.json();
    }
  });
}
