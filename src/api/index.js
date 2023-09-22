import axios from 'axios'
export function login(params) {
  return axios({
    url: 'http://localhost:4000/login',
    method: 'post',
    data: params
  })
}
export function getUserList(params) {
  return axios({
    url: 'http://localhost:4000/getUserList',
    method: 'get',
    params: params
  })
}
export function getRoles(params) {
  return axios({
    url: 'http://localhost:4000/getRoles',
    method: 'get',
    params: params
  })
}
export function getArticleList(params) {
  return axios({
    url: 'http://localhost:4000/getArticleList',
    method: 'get',
    params: params
  })
}
export function deleteUser(params) {
  return axios({
    url: 'http://localhost:4000/deleteUser',
    method: 'post',
    data: params
  })
}
export function editUser(params) {
  return axios({
    url: 'http://localhost:4000/editUser',
    method: 'post',
    data: params
  })
}
export function addUser(params) {
  return axios({
    url: 'http://localhost:4000/addUser',
    method: 'post',
    data: params
  })
}
export function addArticle(params) {
  return axios({
    url: 'http://localhost:4000/addArticle',
    method: 'post',
    data: params
  })
}
export function editArticle(params) {
  return axios({
    url: 'http://localhost:4000/editArticle',
    method: 'post',
    data: params
  })
}
export function deleteArticle(params) {
  return axios({
    url: 'http://localhost:4000/deleteArticle',
    method: 'post',
    data: params
  })
}
