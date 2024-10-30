const mongosse = require('mongoose')
const { Schema } = mongoose

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

const inferenceEntity = mongosse.model('Inference', inferenceSchema)

module.exports = inferenceEntity