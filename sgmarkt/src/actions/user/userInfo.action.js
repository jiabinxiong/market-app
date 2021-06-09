import {
    MODEL_SHOW_SELECT_FOOTER_ACTION_TYPE,
    GET_USER_INFO, MODIFY_USER_INFO, CONFIG_USER_BACKGROUND_ACTION_TYPE, CONFIG_USER_AVATAR_ACTION_TYPE,
    CONFIG_USER_BACKGROUND_AVATAR_ACTION_TYPE, CONFIG_USER_COPY_MODIFY_ACTION_TYPE, CONFIG_USER_COPY_MODIFY_EMPTY_ACTION_TYPE,
    CONFIG_USER_INFO_SAVE_ACTION_TYPE, CONFIG_USER_INFO_NAV_NAVIGATION_ACTION_TYPE
} from '../../actionTypes';

export const getUserInfoAction = data => ({ type: GET_USER_INFO, data });

export const modifyUserInfoAction = data => ({ type: MODIFY_USER_INFO, data });

export const configUserBackgroundAction = data => ({ type: CONFIG_USER_BACKGROUND_ACTION_TYPE, data }); // 设置背景

export const configUserAvatarAction = data => ({ type: CONFIG_USER_AVATAR_ACTION_TYPE, data }); // 设置肖像

export const userInfoCopyModifyAction = data => ({ type: CONFIG_USER_COPY_MODIFY_ACTION_TYPE, data }); // 修改用户信息 副本
// export const userInfoCopyModifyActionAsync = data => {
//     return dispatch => {
//         dispatch(userInfoCopyModifyAction(data));
//     }
// }

export const configUserCopyModifyEmptyAction = data => ({ type: CONFIG_USER_COPY_MODIFY_EMPTY_ACTION_TYPE, data }); // 清空用户信息 副本

export const configUserBackgroundAvatarAction = data => ({ type: CONFIG_USER_BACKGROUND_AVATAR_ACTION_TYPE, data });

export const configUserInfoSaveAction = data => ({ type: CONFIG_USER_INFO_SAVE_ACTION_TYPE, data }); // 个人信息保存
// export const configUserInfoSaveActionAsync = (data) => {
//     return dispatch => {
//         dispatch(configUserInfoSaveAction(data));
//     }
// }

// export const modelShowSelectFooterAction = data = ({ type: MODEL_SHOW_SELECT_FOOTER_ACTION_TYPE, data }); //

export const configUserInfoNavNavigationAction = data => ({ type: CONFIG_USER_INFO_NAV_NAVIGATION_ACTION_TYPE, data }); // 获了上一级页面navigation信息  因为goBack() 会返回首页 由于在my.navigation返回的
