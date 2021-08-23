import axios from "axios"
import { Toast } from 'vant'
axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api'
axios.interceptors.request.use((config) => {
    console.log(config);
    // if(config.method == 'post') {
    //     config.data.userid = '001'
    //     config.data.token = '2222'
    // }else if(config.method == 'get'){
    //     config.params.userid = '001'
    //     config.params.token = '2222'
    // }
    //在发送请求前，比如添加用户id，token等公共的参数//根据实际情况配置
    return config
}, (error) => {
    return Promise.reject(error)
})
axios.interceptors.response.use((res) => {
    //console.log(res.data)
    if(res.data.code == 1) {
    }else {
        //Toast(res.data.msg)
        return Promise.reject(res)
        //return Promise.resolve(res)
        //alert(res.data.msg);
    }
    return res.data
})
// export function axiosPost(url, params) {
//     axios.post(url, params)
//         .then(response => {
//             return response
//         })
//     return new Promise((resolve, reject) => {
//         axios.post(url, params)
//             .then(response => {
//                 //console.log(response)
//                 if(typeof(response) != 'undefined') {
//                     resolve(response)
//                 }
//             }, err => {
//                 reject(err)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }
// export function axiosGet(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, params)
//             .then(response => {
//                 resolve(response)
//             }, err => {
//                 reject(err)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }
export default axios