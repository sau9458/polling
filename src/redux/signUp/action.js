import * as fireAction from '../../services/SignupServices'
import * as constants from "../constants";
import * as actions from "../action";

function signUp(data1){
    return fireAction.signUpApi(data1);
}

export function requestSignUp (data1) {
    return function(dispatch){
        signUp(data1).then((res) => {
            dispatch(actions.successSignUp(res));
        });
    }
}
  