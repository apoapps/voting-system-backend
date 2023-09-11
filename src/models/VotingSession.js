// CabildoSession.js
const { Schema, model } = require("mongoose");

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
    
    votingPoints: [
      {
        commision: String,
        required_votes: String,
        voting_form: String,
        subject: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("VottingSession", votingSessionSchema);
