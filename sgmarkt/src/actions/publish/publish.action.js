import {
    PUBLISH_SELECT_IMG_ACTION_TYPE,
    PUBLISH_SELECTED_IMG_ACTION_TYPE, PUBLISH_CLEAR_SELECT_IMG_ACTION_TYPE, PUBLISH_SELECT_IMG_INDEX_ACTION_TYPE,
    PUBLISH_SELECT_IMG_HOW_MANY_ACTION_TYPE, PUBLISH_SELECT_PICKER_IMG_ACTION_TYPE, PUBLISH_MODIFY_TAB_ACTION_TYPE, PUBLISH_SELECT_FILTER_ACTION_TYPE
} from '../../actionTypes';

export const publishSelectImgAction = data => ({ type: PUBLISH_SELECT_IMG_ACTION_TYPE, data }); // 选中图片 用于裁剪滤镜 后 发布

export const publishSelectedImgAction = data => ({ type: PUBLISH_SELECTED_IMG_ACTION_TYPE, data }); //选中图片

export const publishClearSelectedImgAction = data => ({ type: PUBLISH_CLEAR_SELECT_IMG_ACTION_TYPE, data }); // 取消选中图片

export const publishSelectedImgHowManyAction = data => ({ type: PUBLISH_SELECT_IMG_HOW_MANY_ACTION_TYPE, data }); // 选中了那些

export const publishSelectedIndexImgAction = data => ({ type: PUBLISH_SELECT_IMG_INDEX_ACTION_TYPE, data }); //选中那一张需要美化或裁剪

export const publishSelectedPickerImgAction = data => ({ type: PUBLISH_SELECT_PICKER_IMG_ACTION_TYPE, data }); // 裁剪完成后

export const publishSelectFilterAction = data => ({ type: PUBLISH_SELECT_FILTER_ACTION_TYPE, data }); // 滤镜

export const publishModifyTabAction = data => ({ type: PUBLISH_MODIFY_TAB_ACTION_TYPE, data });  // 是选择 0 贴纸 1 滤镜 2 裁剪
