import axios from "../request/http";
export function createOrderApi(params)
{
    return axios.post('/order/createOrder', params);
}
export function initOrder(params)
{
    return axios.post('/order/initOrder', params);
}
export function orderDetail(params)
{
    return axios.post('/order/orderDetail', params);
}
export function orderList(params)
{
    return axios.post('/order/orderList', params);
}