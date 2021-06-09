import { get, post } from  './axios';
import { HTTP_SERVER } from '../constants/http.constant';

class UserService {
    login(data={}   ) {
        return post(`${HTTP_SERVER}user/login`, data);
    }

    register (data = {}) {
        return post(`${HTTP_SERVER}user/register`, data);
    }

    logout() {

    }

    info(data = {}) {
        return get(`${HTTP_SERVER}userInfo/info`, data);
    }

    modifyInfo(data={}) {
        return post(`${HTTP_SERVER}userInfo/modify`, data);
    }
}

const userService = new UserService();

export default userService;
