// const initialLoginState = {
//     isLoading: true,
//     userName: null,
//     userToken: null
// };



import { combineReducers } from 'redux';

function homeReducer(state = [], action) {
    switch (action.type) {
        case "MARKT_LIST":
            return [];
        default:
            return [];
    }
}

export {
    homeReducer
}

