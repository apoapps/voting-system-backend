const noteCtrl = {}

const note = require('../models/Note.js')

noteCtrl.getNotes = async (req,res) =>{
    const notes = await note.find()
    res.json(notes)
}

noteCtrl.getNote = async (req, res) =>{
    const noteF = await note.findById(req.params.id);
    res.send(noteF)
}

noteCtrl.createNote = async (req, res) => {
    const newNote = new note(req.body);
    await newNote.save();
    res.send({message: 'producto creado'})
}


module.exports = noteCtrl;