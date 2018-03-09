const mongoose = require('mongoose')
const Schema = monoose.Schema

const VoteSchema = new Schema({
  VoteMeta: { // This holds general info about the votes
    PollId: Number, // id of the poll
    Username: String // If availible e.g. logged in (not a necessity)
  },
  VoteDetail: [{ // Array of votes (infinite size)
    QuestionId: Number, // Id of the question
    Answers: [{ AnswerId: Number }] // Id of the answer(s)
  }]
})

// Create collection and add Schema
const Vote = mongoose.model('Vote', VoteSchema)

module.exports = Vote
