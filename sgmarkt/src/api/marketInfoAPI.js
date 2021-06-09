import AV from 'leancloud-storage/core';

export function marketListApi(parameter, callback) {
    const { limit = 10, skip = 10 } = parameter;
    const marketList = new AV.Query('marketList');
    marketList.limit(limit);
    marketList.skip(skip);
    marketList.find().then((result) => {
        let copyArr = [];
        result.map((data, index) => {
            copyArr.push(data.attributes);
        })
        callback(copyArr);
    })
}
