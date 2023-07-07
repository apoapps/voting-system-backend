import Note from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    console.log("New user Connected");

    const emitNotes = async () => {
      const notes = await Note.find();

      // nombre - objeto a emitir
      io.emit("loadNotes", notes);
      //   console.log(notes);
    };
    emitNotes();

    //Cuando se cree una nueva nota
    socket.on("newNote", async (data) => {
      const newNote = new Note(data);

      const savedNote = await newNote.save();
      console.log(savedNote);

      console.log(data);
    });
  });
};
