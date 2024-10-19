const mongoose = require('mongoose');

const DB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/chatgpt', {})
    console.log('Banco conectado')
  } catch (error) {
    console.error('Erro ao conectar no banco: ', error)

  }
}

module.exports = DB