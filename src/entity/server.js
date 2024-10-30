const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    idade: Number
})


const usuario = mongoose.model("Usuario", usuarioSchema)

module.exports = usuario