import axios from "axios";

const http = axios.create();

http.defaults.headers['Content-type'] = 'application/x-www-form-urlencoded; charset=utf-8';

http.defaults.timeout = 10000;

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function(response) {
    return response;
}, function(errow) {
    return Promise.reject(error);
});


// get封装
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            params,
            method: "get",
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
// post封装
export function post(url, params = {}, data = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: "post",
            params,
            data,
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
// delete封装
export function del(url, params = {}, data = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: "delete",
            params,
            data,
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
//   Blob封装,resopnseType:Blob一般是用于文件下载
export function getBlob(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: "get",
            params,
            responseType:'blob'
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export default {
    get,
    post,
    del,
    getBlob
}

// export default http;
