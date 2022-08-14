import http from '../utils/axios'

function getImgList(start) {
    return new Promise((resolve, reject) => {
        http("get", `https://m.duitang.com/napi/index/hot/?start=${start}&limit=24&more=1&include_fields=sender%2Calbum`).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}


export {
    getImgList,
}