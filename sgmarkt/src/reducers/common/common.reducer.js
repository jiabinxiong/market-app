import { MODEL_SHOW_SELECT_FOOTER_ACTION_TYPE,
    GENDER_PICKER_SHOW_ACTION_TYPE,
    DATE_TIME_PICKER_SHOW_ACTION_TYPE,
    LOADING_CONFIG_USER_INFO_ACTION_TYPE, POP_WARNING_CONFIG_USER_INFO_BACK_ACTION_TYPE
} from '../../actionTypes';

import { filterTypeModel } from '../../models';

function modelShowSelectFooterReducer(state = false, action) {
    switch (action.type) {
        case MODEL_SHOW_SELECT_FOOTER_ACTION_TYPE:
            return action.data;
        default:
            return false;
    }
}


// 时间控件
function dateTimePickerShowReducer(state = false, action) {
    switch ( action.type ) {
        case DATE_TIME_PICKER_SHOW_ACTION_TYPE:
            return action.data;
        default:
            return false;
    }
}

// 性别控件
function genderPickerShowReducer(state = false, action) {
    switch ( action.type ) {
        case GENDER_PICKER_SHOW_ACTION_TYPE:
            return action.data;
        default:
            return false;
    }
}

// loading
function popShowReducer( state=false, action ) {
    switch (action.type) {
        case LOADING_CONFIG_USER_INFO_ACTION_TYPE:
            return action.data;
        default:
            return false;
    }
}

function popWarningConfigUserInfoBackReducer(state = false, action) {
    switch (action.type) {
        case POP_WARNING_CONFIG_USER_INFO_BACK_ACTION_TYPE:
            return action.data;
        default:
            return false;
    }
}


export {
    modelShowSelectFooterReducer,
    dateTimePickerShowReducer,
    genderPickerShowReducer,
    popShowReducer,
    popWarningConfigUserInfoBackReducer
}
