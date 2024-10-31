const Mongoose = require('mongoose')

const usuarioSchema = new Mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    idade: Number
})


const usuario = Mongoose.model("Usuario", usuarioSchema)

module.exports = usuario