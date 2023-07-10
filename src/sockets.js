import Note from "./models/Note";
import { clientNewNote, serverLoadNotes } from "./public/constants.js";

export default (io) => {
  io.on("connection", (socket) => {
    console.log("New user Connected (web)");

    const emitNotes = async () => {
      const notes = await Note.find();

      // nombre - objeto a emitir
      io.emit("server:loadnotes", notes);
      //   console.log(notes);
    };
    emitNotes();

    //Cuando se cree una nueva nota
    socket.on("client:newnote", async (data) => {
      const newNote = new Note(data);

      const savedNote = await newNote.save();
      console.log(savedNote);

      console.log(data);
      io.emit("server:newnote", savedNote);
    });

    socket.on("client:deletenote", async (id) => {
      await Note.findByIdAndDelete(id);
      console.log("Deleted: " + id);
      emitNotes();
    });

    socket.on("client:getnote", async (id) => {
      const note = await Note.findById(id);
      io.emit("server:selectednote", note);
      emitNotes();
    });

    socket.on("client:updatenote", async (updatedNote) => {
      await Note.findByIdAndUpdate(updatedNote._id, {
        title: updatedNote.title,
        description: updatedNote.description,
      });
      emitNotes();
    });
  });
};
