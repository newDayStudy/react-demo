const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const user = require('./user')
const article = require('./article')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (res.method === 'OPTIONS') res.send(200)
  next()
})
app.post('/login', (req, res) => {
  res.json({
    code: 200,
    message: 'OK',
    data: {
      ...req.body,
      token: 'first-01'
    }
  })
})
app.get('/getUserList', (req, res) => {
  if (req.query.token !== 'first-01') {
    res.json({
      code: 0,
      message: '用户权限失败',
      data: null
    })
  }
  res.json(user)
})
app.get('/getArticleList', (req, res) => {
  if (req.query.token !== 'first-01') {
    res.json({
      code: 0,
      message: '用户权限失败',
      data: null
    })
  }
  res.json(article)
})
app.listen(4000, () => {
  console.log('port is stared at 4000')
})