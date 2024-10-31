const Mongoose = require('mongoose');

const DB = async () => {
  try {
    await Mongoose.connect('mongodb://mongodb:27017/chatgpt', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Banco conectado')
  } catch (error) {
    console.error('Erro ao conectar no banco: ', error)

  }
}

module.exports = DB