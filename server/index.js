const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const connect = require('./mysql')
const user = require('./user')
const article = require('./article')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (res.method === 'OPTIONS') res.send(200)
  next()
})
app.post('/login', (req, res) => {
  connect('SELECT * FROM `user_table` where username="' + req.body.username + '" and password = "' + req.body.password + '"', (err, res1, fields) => {
    if (err) {
      throw new Error('err')
      return
    }
    if (res1.length == 0) {
      const token = jwt.sign({ password: req.body.password }, req.body.username)
      connect('INSERT INTO `user_table` ( `username`, `password`, `token`) VALUES ("' + req.body.username + '","' + req.body.password + '", "' + token + '")', (err, res2, fields) => {
        if (err) {
          throw new Error('err', err)
          return
        }
        res.json({
          code: 200,
          message: 'ok',
          data: {
            ...req.body,
            token: token
          }
        })
      })
    } else {
      res.json({
        code: 200,
        message: 'ok',
        data: res1[0]
      })
    }
  })
})
app.get('/getUserList', (req, res) => {
  const token = req.query.token
  connect('SELECT * FROM `user_table` WHERE token = "' + token + '"', (err, data, fields) => {
    if (err) {
      throw new Error('err', err)
      return
    }
    if (data.length) {
      res.json(user)
    } else {
      res.json({
        code: 0,
        message: 'fail',
        data: null
      })
    }
  })
})
app.get('/getArticleList', (req, res) => {
  const token = req.query.token
  connect('SELECT * FROM `user_table` WHERE token = "' + token + '"', (err, data, fields) => {
    if (err) {
      throw new Error('err', err)
      return
    }
    if (data.length) {
      res.json(article)
    } else {
      res.json({
        code: 0,
        message: 'fail',
        data: null
      })
    }
  })
})
app.listen(4000, () => {
  console.log('port is stared at 4000')
})