const Mongosse = require('mongoose')
const { Schema } = Mongosse

const inferenceSchema = new Schema({
    inference: {
        type: String,
        required: true
    },
    conference: {
        type: String,
        required: false
    }
})

const inferenceEntity = Mongosse.model('Inference', inferenceSchema)

module.exports = inferenceEntity