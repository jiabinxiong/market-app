import AV from 'leancloud-storage/core';

export function signInApi(username, password, callback) {
    AV.User.logIn(username, password).then(function (data) {
       callback(data, 0);
    }, function (error) {
        callback(error, 1);

        // alert(JSON.stringify(error));
    });
}
