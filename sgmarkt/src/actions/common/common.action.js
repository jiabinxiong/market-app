import {
    MODEL_SHOW_SELECT_FOOTER_ACTION_TYPE, DATE_TIME_PICKER_SHOW_ACTION_TYPE, GENDER_PICKER_SHOW_ACTION_TYPE, LOADING_CONFIG_USER_INFO_ACTION_TYPE,
    POP_WARNING_CONFIG_USER_INFO_BACK_ACTION_TYPE
} from '../../actionTypes';

export const modelShowSelectFooterAction = data => ({ type: MODEL_SHOW_SELECT_FOOTER_ACTION_TYPE, data }); // 用于低部选择组件隐藏或显示

export const dateTimePickerShowAction = data => ({ type: DATE_TIME_PICKER_SHOW_ACTION_TYPE, data }); //弹出时间控件

export const genderPickerShowAction =  data => ({ type: GENDER_PICKER_SHOW_ACTION_TYPE, data });  // 弹出性别控件

export const loadingConfigUserInfoAction = data => ({ type: LOADING_CONFIG_USER_INFO_ACTION_TYPE, data }); // loading

export const popWarningConfigUserInfoBackAction = data => ({ type: POP_WARNING_CONFIG_USER_INFO_BACK_ACTION_TYPE, data }); //用户设置返回上页提示 是否修改 修改弹出


