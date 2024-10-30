const mongoose = require('mongoose')
const { Schema } = mongoose

const conversationSchema = new Schema({
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

const ConversationEntity = mongoose.model('Conversation', conversationSchema)

module.exports = ConversationEntity