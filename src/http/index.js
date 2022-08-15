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
function getImgwallpaper(start) {
    return new Promise((resolve, reject) => {
        http("get", `https://m.duitang.com/napi/blog/list/by_search/?start=${start}&limit=24&more=1&__domain=www.duitang.com&include_fields=sender%2Calbum%2Clike_count%2Cmsg&kw=%E5%A3%81%E7%BA%B8`).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}

//

export {
    getImgList,
    getImgwallpaper
}