export function leancloud() {
    import AV from 'leancloud-storage/core';
    import * as adapters from '@leancloud/platform-adapters-react-native';
    AV.setAdapters(adapters);
    AV.init({
        appId: "HI2O0to5BhqXsL3LGJqwfFq6-gzGzoHsz",
        appKey: "3IoksFVyeorUdQHNMoRtlDDx",
        serverURL: "https://hi2o0to5.lc-cn-n1-shared.com"
    });

}
