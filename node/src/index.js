const express  = require('express')
const app = express()
const PORT = 3000

const mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
})
connection.connect()
connection.query(`INSERT INTO people(name) VALUES('Carlos')`)
connection.end()

app.get('/', (_, res) => res.send('<h1>Hello Folks</h1>'))

app.listen(PORT, () => console.log('listening on port ' + PORT))