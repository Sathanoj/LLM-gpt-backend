const cors = require('cors')
require('dotenv').config()
const express = require('express')
const DB = require('./db')
const router = require('./src/routes')

const app = express()
const port = 3001

app.use(cors({
  origin: 'http://localhost:8081'
}))

DB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', router)

app.listen(port, (erro) =>{
  if(erro) {
    console.log('A porta não está sendo escutada: ', erro)
  } else {
    console.log(`Servidor é iniciado na porta ${port}`)
  }
})