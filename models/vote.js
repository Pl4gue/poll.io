const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
	VoteMeta: { // This holds general info about the votes
		PollId: String, // id of the poll
		Username: String // If availible e.g. logged in (not a necessity)
	},
	VoteDetail: [{ // Array of votes (infinite size)
		QuestionId: String, // Id of the question
		Answers: [{ AnswerId: String }] // Id of the answer(s)
	}]
});

// Create collection and add Schema
const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;
