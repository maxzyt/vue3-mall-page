import axios from '../request/http.js'
export function getLiveCategory(params) {
    return axios.post('/index/getLiveCategory');
}