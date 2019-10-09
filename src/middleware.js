import {USER_LOGIN_SUCCESS} from "./actions/constant";
import {requests} from "./agent";

export const tokenMiddleare = store => next => action => {

    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            window.localStorage.setItem('jwtToken', action.token);
            window.localStorage.setItem('userId', action.userId);
            requests.setToken(action.token);
            break;
        default:
    }

    next(action);
};