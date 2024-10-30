const Natural = require('natural')

const tokenizer = new Natural.WordTokenizer()

const cleaningText = (text) => {
    const createTokens = tokenizer.tokenize(text)
    return createTokens
}

module.exports =  cleaningText