import { HTTP_SERVER } from '../../constants';
export const userInfoDataModel = {
    email: '',
    userName: '',
    nickname: '',
    avatar: `${HTTP_SERVER}public/images/default.png`,
    background: `${HTTP_SERVER}public/images/default.png`,
    bio: '',
    gender: -1,
    status: 0,
    _id: 0,
    phone: '',
    birthday: '' // 生日 时间戳
};
