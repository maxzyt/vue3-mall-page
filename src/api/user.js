import axios from "../request/http";
export function logout()
{
    return axios.get('/user/logout');
}
export function userinfo(params)
{
    return axios.post('/user/userinfo', params);
}
export function delHistory(params)
{
    return axios.post('/user/delHistory', params);
}
export function history(params)
{
    return axios.post('/user/history', params);
}
export function collect(params)
{
    return axios.post('/user/collect', params);
}
export function editAddress(params)
{
    return axios.post('/user/editAddress', params);
}
export function oneAddress(params)
{
    return axios.post('/user/oneAddress', params);
}
export function reg(params)
{
    return axios.post('/user/register', params);
}
export function login(params)
{
    return axios.post('/user/login', params);
}
export function addAddress(params)
{
    return axios.post('/user/addAddress', params);
}
export function address(params)
{
    return axios.post('/user/address', params);
}