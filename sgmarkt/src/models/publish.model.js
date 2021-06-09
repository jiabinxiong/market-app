import { PINWHEEL_ICON, CONTENT_CUT_ICON, FILE_IMAGE_ICON } from '../constants/icon.constant';

export const publishModifyTabReducerModel = {
    type: ''
}

export const publishModifyTabModel = [
    // {
    //     index: 0,
    //     icon: FILE_IMAGE_ICON,
    //     type: 'sticker',
    //     text: '贴纸'
    // },
    {
        index: 1,
        icon: PINWHEEL_ICON,
        type: 'filter',
        text: '滤镜'
    },
    {
        index: 2,
        icon: CONTENT_CUT_ICON,
        type: 'cut',
        text: '裁剪'
    }
];
