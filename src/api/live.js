import axios from "../request/http";
export function category()
{
    return axios.post('/index/getLiveCategory');
}
export function live(params)
{
    return axios.post('/index/live', params);
}