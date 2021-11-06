import axios from '../request/http.js';
export function recommend(params) {
    return axios.post('/index/recommend', params);
}
export function recommendGoods(params) {
    return axios.post('/index/recommendGoods', params);
}

export function getLiveCategory() {
    return axios.post('/index/getLiveCategory');
}

export function getIndex() {
    return axios.post('/index/index');
}