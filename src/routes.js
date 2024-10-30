const express = require('express')
const conversationEntity = require('./entity/conversationEntity')
const router = express.Router()
const OpenAI = require('openai')

const openai = new OpenAI({
    apikey: process.env.OpenAI_API_KEY
})


router.post('/talktochat', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
      console.error('Erro: O campo "prompt" está vazio ou indefinido.');
      return res.status(400).json({ error: 'O campo "prompt" é obrigatório.' });
    }
  
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 1000
      });
      const answerChat = completion.choices[0].message.content;
      const newConversation = new conversationEntity({
        question: prompt,
        answer: answerChat,
        date: new Date()
      });
      await newConversation.save();
      // return newConversation
      if(res.status(200)) {
        return res.json(newConversation);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao processar a requisição' });
    }
  });

router.get('/fullconversation', async (req, res) => {
  try {
    const conversations = await conversationEntity.find()
    return res.json(conversations)
  
  } catch (error) {
    res.status(500).json({ error: 'Erro ao processar a requisição' });
  }
})

module.exports = router