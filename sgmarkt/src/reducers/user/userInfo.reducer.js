import {
    GET_USER_INFO, MODIFY_USER_INFO,
    CONFIG_USER_AVATAR_ACTION_TYPE, CONFIG_USER_BACKGROUND_ACTION_TYPE,
    CONFIG_USER_COPY_MODIFY_ACTION_TYPE, CONFIG_USER_COPY_MODIFY_EMPTY_ACTION_TYPE, CONFIG_USER_INFO_SAVE_ACTION_TYPE,
    CONFIG_USER_INFO_NAV_NAVIGATION_ACTION_TYPE
} from '../../actionTypes';
import { IS_CONFIG_BACKGROUND_AVATAR } from '../../constants';

import { userInfoDataModel } from '../../models';

function userInfoReducer(state=userInfoDataModel, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return Object.assign({}, state,  action.data)
        case MODIFY_USER_INFO:
            const newState = Object.assign({}, state, action.data);
            return newState;
        default:
            return state;
    }
}

// 修改个人信息副本
function userInfoCopyModifyReducer(state = userInfoDataModel, action) {
    switch (action.type) {
        case CONFIG_USER_COPY_MODIFY_ACTION_TYPE:
            return Object.assign({}, state, action.data);
        case CONFIG_USER_COPY_MODIFY_EMPTY_ACTION_TYPE:
            return state;
        default:
            return state;
    }
}

// 保存
function configUserInfoSaveReducer(state = false, action) {
    switch ( action.type ) {
        case CONFIG_USER_INFO_SAVE_ACTION_TYPE:
            return action.data;
        default:
            return state;
    }
}

// 设置背景图还是肖像
function configUserBackgroundAvatarReducer(state = { backgroundUri: '', avatarUri: '', type: '' }, action) {
    switch (action.type) {
        case CONFIG_USER_BACKGROUND_ACTION_TYPE:
            return Object.assign({}, state, action.data);
        case CONFIG_USER_AVATAR_ACTION_TYPE:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}

// 获了上一级页面navigation信息  因为goBack() 会返回首页 由于在my.navigation返回的
function configUserInfoNavNavigationReducer(state ={}, action) {
    switch (action.type) {
        case CONFIG_USER_INFO_NAV_NAVIGATION_ACTION_TYPE:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}

export {
    userInfoReducer,
    configUserBackgroundAvatarReducer,
    userInfoCopyModifyReducer,
    configUserInfoSaveReducer,
    configUserInfoNavNavigationReducer
}
