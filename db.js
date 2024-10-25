const mongoose = require('mongoose');

const DB = async () => {
  try {
    await mongoose.connect('mongodb://mongodb:27017/chatgpt', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Banco conectado')
  } catch (error) {
    console.error('Erro ao conectar no banco: ', error)

  }
}

module.exports = DB