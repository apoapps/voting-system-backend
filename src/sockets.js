import User from "./models/User";


export default (io) => {

  io.on("connection",(socket) => {
    console.log("New user connected (Flutter)");
    const emitUsers= async () =>{
      const users = await User.find();
      io.emit("server:loadusers", users)
    }
    emitUsers();


    //Create a new user
    socket.on('client:newuser', async (data) => {
      const newUser = new User(data);
      const savedUser = await newUser.save()
      io.emit('server:newuser', savedUser)
    });

    //Delete user
    socket.on("client:deleteuser", async (id) => {
      await User.findByIdAndDelete(id)
      emitUsers()
    });

    socket.on("client:getuser", async (id) => {
      const user = await User.findById(id)
      socket.emit('server:selecteduser', user)
    })
  });
}




/*import Note from "./models/Note";
import { clientNewNote, serverLoadNotes } from "./public/constants.js";

export default (io) => {
  io.on("connection", (socket) => {
    console.log("New user Connected (Flutter)");

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
*/