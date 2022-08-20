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

function getImgmore(start) {
    return new Promise((resolve, reject) => {
        http("get", `https://m.duitang.com/napi/blog/list/by_album/?start=${start}&limit=24&more=1&include_fields=sender%2Calbum%2Clike_count&album_id=99208230`).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}

function getouth(start){
    return new Promise((resolve,reject)=>{
        http('get','https://m.duitang.com/napi/blog/with_instance_tag/detail/?blog_id=1413496834&include_fields=tags%2Crelated_albums%2Crelated_albums.covers%2Croot_album%2Cshare_links_2%2Cextra_links%2Cicon_description%2Croot_id%2Cinstant_tag').then(res=>{
            resolve(res);
        },error =>{
            console.log("网络异常~", error);
            reject(error)
        })
    })
}

//

export {
    getImgList,
    getImgwallpaper,
    getImgmore,
    getouth
}