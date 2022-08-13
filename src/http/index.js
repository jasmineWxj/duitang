import http from '../util/axiox'

function getArticleList(params) {
    return new Promise((resolve, reject) => {
        http("get", '/', params).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}


export {
    getArticleList,
}