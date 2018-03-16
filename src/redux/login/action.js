import * as fireAction from '../../services/LoginServices'
import * as constants from "../constants";
import * as actions from "../action";

function login(dataLogin){
    return fireAction.loginApi(dataLogin);
}

export function requestLogin (dataLogin) {
    return function(dispatch){
        login(dataLogin).then((res) => {
            dispatch(actions.successLogin(res));
        });
    }
}
  