import { post } from './axios';
import {HTTP_SERVER} from '../constants/http.constant';

class UploadService {
    img(data) {
        return post(`${HTTP_SERVER}file/upload`,
            {headers: {
                'Content-Type': 'multipart/form-data'
            }}, data);
    }
}

const uploadService = new UploadService();

export default uploadService;
