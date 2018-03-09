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
    Answers: [{ // Array of all answers to that question
      AnswerId: Number, // Id of the answer
      Answer: String // The text of the answer
    }]
  }]
})
