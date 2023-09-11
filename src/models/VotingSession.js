const mongoose = require("mongoose");
const { Schema } = mongoose;

const votingPointSchema = new Schema({
  commision: String,
  required_votes: String,
  voting_form: String,
  subject: String,
  description: String,
  votesFor: Array,
  votesAgainst: Array,
  votesAbstain: Array,
});

const votingSessionSchema = new Schema(
  {
    municipalityNumber: String,
    location: String,
    justifiedAbsences: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    votingPoints: [votingPointSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("VotingSession", votingSessionSchema);
