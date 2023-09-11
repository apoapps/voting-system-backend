import express from "express";
const router = express.Router();
const CabildoSession = require("../models/VotingSession.js");

// Función para inicializar una sesión de cabildo dummy
const initializeDummySession = async () => {
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
};

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
