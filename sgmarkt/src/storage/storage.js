import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

export const storage = new Storage({
    // maximum capacity, default 1000 key-ids
    size: 1000,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: 1000 * 3600 * 24,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired data was found,
    // the corresponding sync method will be invoked returning
    // the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

export function storageSave (key, data) {
    storage.save({
        key: key,
        data: data
    });
}

export function storageLoad (key, callback) {
    storage.load({
        key: key
    }).then(res => {
        callback(res, 0);
    }).catch(err => {
        callback(err, 1);
    });
}


export function storageRemove (key) {
    storage.remove({
        key: key,
    });
}

