const mongoose = require('mongoose')
const Schema = monoose.Schema

const PollSchema = new Schema({
  PollMeta: { // This holds general info about the poll
    PollId: Number, // Id of the poll
    Author: String, // Username of the person creating the poll
    PollTitle: String, // The title of the poll
    PollDescription: String, // Optional poll description
    PollThankYou: String // Optional 'Thank you' message to be displayed on completion
  },
  Questions: [{ // Array of questions (infinite size)
    QuestionId: Number, // Id of the question
    Question: String, // The text of the question
    QuestionType: String, // The type of question, e.g. multi-select
    Answers: [{ // Array of all answers to that question
      AnswerId: Number, // Id of the answer
      Answer: String // The text of the answer
    }]
  }]
})

// Create collection and add Schema
const Poll = mongoose.model('Poll', PollSchema)

module.exports = Poll
