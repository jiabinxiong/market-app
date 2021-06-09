import { get } from "./axios";

import { HTTP } from '../constants/http.constant';

class HomeService {
    marktList(data: {}) {
        return get(`${HTTP}marktList.json`);
    }
}

const homeService = new HomeService();
export default homeService;
