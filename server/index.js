const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const connect = require('./mysql')
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
      res.json({
        code: 0,
        message: '当前用户不存在',
        data: null
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
  const { pageSize, token, pageNo } = req.query
  connect('SELECT * FROM `user_table`', (err, data1) => {
    if (err) {
      throw new Error(err)
      return
    }
    const offset = (pageNo - 1) * pageSize
    connect('SELECT a.id, a.username, a.password, a.roleId, a.token, b.name FROM `user_table` a left join `user_role_table` b on a.roleId = b.id LIMIT ' + offset + ', ' + pageSize + '', (err, data, fields) => {
      if (err) {
        throw new Error('err', err)
        return
      }
      if (data.length) {
        res.json({
          code: 200,
          message: 'ok',
          data: {
            data: data,
            current: pageNo,
            pageSize: pageSize,
            total: data1.length
          }
        })
      } else {
        res.json({
          code: 0,
          message: 'fail',
          data: null
        })
      }
    })
  })

})
app.post('/deleteUser', (req, res) => {
  connect('DELETE FROM `user_table` WHERE id="' + req.body.id + '"', (err, data) => {
    if (err) {
      throw new Error(err)
      return
    }
    res.json({
      code: 200,
      message: 'ok',
      data: null
    })
  })
})
app.post('/addUser', (req, res) => {
  const { username, password, roleId } = req.body
  const token = jwt.sign({ password: password }, username)
  connect('SELECT * FROM `user_table` where username="' + username + '" and password="' + password + '"', (err, users) => {
    if (err) {
      throw new Error('err', err)
    }
    if (users.length == 0) {
      connect('INSERT INTO `user_table` ( `username`, `password`, `token`, `roleId`) VALUES ("' + username + '","' + password + '", "' + token + '", "' + roleId + '")', (err1, res2, fields) => {
        if (err1) {
          throw new Error('err', err)
          return
        }
        res.json({
          code: 200,
          message: 'ok',
          data: null
        })
      })
    } else {
      res.json({
        code: 0,
        message: '不能重复添加',
        data: null
      })
    }
  })
})
app.post('/editUser', (req, res) => {
  const { username, password, roleId, id } = req.body
  const token = jwt.sign({ password: password }, username)
  connect('UPDATE `user_table` SET username="' + username + '", token="' + token + '", password="' + password + '", roleId="' + roleId + '" where id="' + id + '"', (err, data) => {
    if (err) {
      throw new Error(err)
      return
    }
    res.json({
      code: 200,
      message: 'ok',
      data: null
    })
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
app.post('/addArticle', (req, res) => { })
app.post('/editArticle', (req, res) => { })
app.post('/deleteArticle', (req, res) => { })
app.get('/getRoles', (req, res) => {
  connect('SELECT * FROM `user_role_table`', (err, data) => {
    if (err) {
      throw new Error(err)
      return
    }
    res.json({
      code: 200,
      message: 'ok',
      data: data
    })
  })
})
app.listen(4000, () => {
  console.log('port is stared at 4000')
})