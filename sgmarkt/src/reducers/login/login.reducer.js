import { combineReducers } from "redux";
import { SIGN_IN, REGISTER } from '../../actionTypes';

function signReducers(state = {
    phone: "",
    password: ""
}, action) {
    switch (action.type) {
        case SIGN_IN:
            return {...state, ...action.data};
        default:
            return state;
    }
}

function registerReducers(state = {}, action) {
    switch (action.type) {
        case REGISTER:
            return { ...state, ...action.data }
        default:
            return state;
    }
}

export {
    signReducers
}
