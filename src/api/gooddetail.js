import axios from "../request/http";
export function addCollect(params)
{
    return axios.post('/good/collect', params);
}
export function goodDetail(params)
{
    return axios.post('/good/goodDetail', params);
}
export function category(params)
{
    return axios.post('/good/category', params);
}
export function categoryById(params)
{
    return axios.post('/good/categoryById', params);
}
export function goodList(params)
{
    return axios.post('/good/goodList', params);
}