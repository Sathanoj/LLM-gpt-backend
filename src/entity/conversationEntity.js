const Mongoose = require('mongoose')
const { Schema } = Mongoose

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

const ConversationEntity = Mongoose.model('Conversation', conversationSchema)

module.exports = ConversationEntity