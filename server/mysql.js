module.exports = function (sql, callback) {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'reactdemo'
  })

  connection.connect()

  connection.query(sql, function (err, rows, fields) {
    if (err) throw err
    callback(err, rows, fields)
  })

  connection.end()
  return connection
}
