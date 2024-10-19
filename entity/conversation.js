const mongoose = require('mongoose')
const schema = mongoose.Schema

const conversationSchema = new schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const Conversation = mongoose.model('Conversation', conversationSchema)

module.exports = Conversation