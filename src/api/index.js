import axios from 'axios'
export function login(params){
  return axios({
    url: 'http://localhost:4000/login',
    method: 'post',
    data: params
  })
}
export function getUserList(params){
  return axios({
    url: 'http://localhost:4000/getUserList',
    method: 'get',
    params: params
  })
}
export function getArticleList(params){
  return axios({
    url: 'http://localhost:4000/getArticleList',
    method: 'get',
    params: params
  })
}