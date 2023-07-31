// backend.js - Código de servidor para Socket.IO
import Note from "./models/Note";
import User from "./models/User";

// Función para obtener las propiedades del usuario a partir de la contraseña
const getUserByPassword = async (password) => {
  try {
    // Buscar en la base de datos el usuario con la contraseña proporcionada
    const user = await User.findOne({ password });

    // Si no se encuentra ningún usuario, retornar null
    if (!user) return null;

    // Si el usuario tiene otra contraseña, retornar sus propiedades
    return {
      position: user.position,
      municipalityNumber: user.municipalityNumber,
      last_name: user.last_name,
      middle_name: user.middle_name,
      first_name: user.first_name,
      gender: user.gender,
      party: user.party,
      start_date: user.start_date,
      end_date: user.end_date,
      member_status: user.member_status,
      member_photo: user.member_photo,
      // Agregar el resto de las propiedades del usuario aquí
    };
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    return null;
  }
};

export default (io) => {
  io.on("connection", (socket) => {
    console.log("New user Connected (Flutter)");

    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit("server:loadnotes", notes);
    };
    emitNotes();

    //Cuando se cree una nueva nota
    socket.on("client:newnote", async (data) => {
      const newNote = new Note(data);
      const savedNote = await newNote.save();
      console.log(savedNote);
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

    // Autenticación del usuario por contraseña
    socket.on("client:login", async (password) => {
      const user = await getUserByPassword(password);
      if (user) {
        io.emit("server:login", user);
        console.log(user);
      } else {
        console.log("server:loginerror");
        io.emit("server:loginerror", {});
      }
    });
  });
};
