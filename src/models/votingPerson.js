const { Schema, model, mongoose } = require("mongoose");

const votingPerson = new Schema(
    {
        type: String,
        position: String,
        municipalityNumber: String,
        lastName: String,
        firstName: String,
        gender: String,
        party: String,
        startDate: Date,
        endDate: Date,
        memberStatus: String,
        memberPhoto: String,
        password: String,
        votingSession: mongoose.ObjectId,
    },
    {
        timestamps: true,
    }
);
module.exports = model("votingPerson", votingPerson);