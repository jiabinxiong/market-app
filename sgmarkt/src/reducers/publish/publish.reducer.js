import {
    PUBLISH_SELECT_IMG_ACTION_TYPE, PUBLISH_SELECTED_IMG_ACTION_TYPE,
    PUBLISH_CLEAR_SELECT_IMG_ACTION_TYPE, PUBLISH_SELECT_IMG_INDEX_ACTION_TYPE,
    PUBLISH_SELECT_IMG_HOW_MANY_ACTION_TYPE, PUBLISH_SELECT_PICKER_IMG_ACTION_TYPE, PUBLISH_MODIFY_TAB_ACTION_TYPE, PUBLISH_SELECT_FILTER_ACTION_TYPE
} from '../../actionTypes';

import { publishModifyTabReducerModel } from '../../models';

function publishSelectImgReducer(state = [], action) {
    switch( action.type ) {
        case PUBLISH_SELECT_IMG_ACTION_TYPE:
            const copyState = [...state];
            copyState.unshift(...action.data);
            return copyState;
        case PUBLISH_SELECTED_IMG_ACTION_TYPE:
            const copyData = [...state];
            const actionIndex = copyData.findIndex((v, i, a) => v.url === action.data.url);
            copyData[actionIndex].select = !copyData[actionIndex].select;

            return [...copyData];
        // case PUBLISH_CLEAR_SELECT_IMG_ACTION_TYPE:
        //     const copyClearData = [...state];
        //     copyClearData[action.data.index].select = false;
        //     return [...copyClearData];
        default:
            return state;
    }
}

function publishSelectedIndexImgReducer(state = 0, action) {
    switch ( action.type ) {
        case PUBLISH_SELECT_IMG_INDEX_ACTION_TYPE:
            return action.data;
        default:
            return state;
    }
}

// 选中了那些
function publishSelectedImgHowManyReducer(state = [], action) {
    switch ( action.type ) {
        case PUBLISH_SELECT_IMG_HOW_MANY_ACTION_TYPE: // 获取
            // let obj = {}
            // for (let item of [...state, ...action.data]) obj[item.index] = item;
            // return Object.values(obj);
            if(action.data.length === 0) {
                return [...action.data];
            } else  {
                return [...state, ...action.data];
            }
        case PUBLISH_SELECT_FILTER_ACTION_TYPE: // 滤境
            const selectFilterCopy = [...state];

            const filterIndex = selectFilterCopy.findIndex((v, i, a) => v.url === action.data.url);
            selectFilterCopy[filterIndex].filterType = action.data.filterType

            return [...selectFilterCopy];
        case PUBLISH_SELECT_PICKER_IMG_ACTION_TYPE: // 裁剪
            const copyPickerImgState = [...state];
            const filterCutIndex = copyPickerImgState.findIndex((v, i, a) => v.url === action.data.sourceUrl);
            copyPickerImgState[filterCutIndex].url = action.data.url;

            return [...copyPickerImgState];
        default:
            return state;
    }
}

// // 选择  (贴纸 滤镜 裁)  相关 ../../model/publish.model.js
function publishModifyTabReducer(state = publishModifyTabReducerModel, action) {
    switch ( action.type ) {
        case PUBLISH_MODIFY_TAB_ACTION_TYPE:
            return {...action.data};
        default:
            return state;
    }
}

export {
    publishSelectImgReducer,
    publishSelectedIndexImgReducer,
    publishSelectedImgHowManyReducer,
    publishModifyTabReducer
}
