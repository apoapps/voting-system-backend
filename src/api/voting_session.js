import express from "express";
const router = express.Router();
const CabildoSession = require("../models/VotingSession.js");
const CabildoVotingPerson = require("../models/votingPerson");

router.post("/create_type", async (req, res) => {
  try {
      // Extract Type data and sessionId from request body
      const typeData = req.body;
      if (!typeData) {
          res.status(400).json({ message: "Type data and sessionId are required" });
          return;
      }
      // Set the vottingSession field in the new Type object
      
      typeData.votingSession = typeData._id;
      delete typeData['_id'];
      
      // Create a new Type
      let arrayToUpdate;
      switch(typeData.type) {
          case "aceptado":
              arrayToUpdate = "votingPoints.$.votesFor";
              break;
          case "denegado":
              arrayToUpdate = "votingPoints.$.votesAgainst";
              break;
          case "abstención":
              arrayToUpdate = "votingPoints.$.votesAbstain";
              break;
          default:
              res.status(400).json({ message: "Invalid vote type provided" });
              return;
      }
      console.log(arrayToUpdate);
      let newVote  = new CabildoVotingPerson(typeData);
      await newVote.save();
      let result = await CabildoSession.updateOne(
        { "votingPoints._id": typeData.votingSession }, 
        { $push: { [arrayToUpdate]: newVote } }
      );
      console.log(result)
      res.json({ message: "Type created successfully", type: newVote });
  } catch (err) {
      res.status(500).json({ message: "Server error", error: err });
  }
});


router.post("/create_session", async (req,res) =>{
  let newType = new CabildoSession(req.body);
  await newType.save();
  res.json({ message: "Type created successfully", type: newType });
})


// Función para inicializar una sesión de cabildo dummy
/*const initializeDummySession = async () => {
  const dummySession = new CabildoSession({
    municipalityNumber: "24",
    location: "Mexicali, BC",
    justifiedAbsences: [],
    votingPoints: [
      {
        commision: "Obras y Servicios Publicos",
        required_votes: "Mayoría Simple",
        voting_form: "Economica",
        subject: "Dummy Point 1",
      },
      {
        commision: "Obras y Servicios Publicos",
        required_votes: "Mayoría Absoluta",
        voting_form: "Nominal",
        subject: "Dummy Point 2",
      },
    ],
  });
  await dummySession.save();
};*/

// Obtener la sesión de cabildo actual
router.get("/get_session", async (req, res) => {
  try {
    let session = await CabildoSession.findOne();
    if (!session) {
      await initializeDummySession();
      session = await CabildoSession.findOne();
    }
    res.json(session);
  } catch (err) {
    res.status(500).json({ message: "Error del servidor", error: err });
  }
});

// Actualizar la sesión de cabildo completa
router.put("/update_session", async (req, res) => {
  try {
    const updatedSession = await CabildoSession.findOneAndUpdate({}, req.body, {
      new: true,
    });
    if (!updatedSession) {
      return res.status(404).json({
        message: "No se encontró la sesión de cabildo para actualizar",
      });
    }
    res.json(updatedSession);
  } catch (err) {
    res.status(500).json({ message: "Error del servidor", error: err });
  }
});

export default router;
