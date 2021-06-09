import { LIKE } from '../../actionTypes';

function likeReducer(state = [1, 2], action) {
    switch ( action.type ) {
        case LIKE:
            return action.data;
        default:
            return state;
    }
}

export {
    likeReducer
}

