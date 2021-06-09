import {storage, storageLoad} from '../storage/storage';


// 不为空  登录状态
export const authLogin = (callback) => {
    storageLoad("token", (loadData, succeed ) => {
        if( succeed === 0) {
            callback(loadData)
        } else if (succeed === 1) {
            callback(null);
        }
    });
}
