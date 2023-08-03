import User from "./models/User";

const getUserByPassword = async (password) => {
  try {
    const user = await User.findOne({ password });

    if (!user) return null;

    return {
      position: user.position,
      municipalityNumber: user.municipalityNumber,
      lastName: user.lastName,
      firstName: user.firstName,
      gender: user.gender,
      party: user.party,
      startDate: user.startDate,
      endDate: user.endDate,
      memberStatus: user.memberStatus,
      memberPhoto: user.memberPhoto,
    };
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    return null;
  }
};

export default (io) => {
  io.on("connection", (socket) => {
    console.log("New user Connected (Flutter)");

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

    socket.on("client:updateuser", async (updatedUserData) => {
      try {
        // Extraer los datos del usuario actualizado del objeto recibido
        const {
          position,
          municipalityNumber,
          lastName,
          firstName,
          gender,
          party,
          startDate,
          endDate,
          memberStatus,
          password,
        } = updatedUserData;

        await userToUpdate.save();

        const updatedUsers = await User.find();

        io.emit("server:updateuser", { users: updatedUsers });

        console.log("Usuario actualizado:", userToUpdate);
      } catch (error) {
        console.error("Error al actualizar usuario:", error);
        io.emit("server:updateusererror", {
          message: "Error al actualizar usuario.",
        });
      }
    });

    socket.on("client:adduser", async (addedUser) => {
      try {
        console.log(addedUser);

        const newUser = new User({
          position: addedUser.position,
          municipalityNumber: addedUser.municipalityNumber,
          lastName: addedUser.lastName,
          firstName: addedUser.firstName,
          gender: addedUser.gender,
          party: addedUser.party,
          startDate: addedUser.startDate,
          endDate: addedUser.endDate,
          memberStatus: addedUser.memberStatus,
          memberPhoto: addedUser.memberPhoto,
          password: addedUser.password,
        });

        await newUser.save();

        const updatedUsers = await User.find();

        io.emit("server:adduser", updatedUsers);

        console.log("(servidor) Nuevo usuario agregado:", newUser);
      } catch (error) {
        console.error("(servidor)Error al agregar nuevo usuario:", error);
        io.emit("server:updateusererror", {
          message: "Error al agregar nuevo usuario.",
        });
      }
    });

    socket.on("client:getusers", async (data) => {
      console.log("Conectando usuarios...");
      const users = await User.find();
      io.emit("server:getusers", users);
      console.log(users);
    });

    socket.on("client:deleteuser", async (id) => {
      await User.findByIdAndDelete(id);
      emitUsers();
    });
  });
};

//LEGACY (No en uso)

////(Dentro de default (io))
// const emitNotes = async () => {
//   const notes = await Note.find();
//   io.emit("server:loadnotes", notes);
// };
// emitNotes();

//import Note from "./models/Note";

// //Cuando se cree una nueva nota
// socket.on("client:newnote", async (data) => {
//   const newNote = new Note(data);
//   const savedNote = await newNote.save();
//   console.log(savedNote);
//   io.emit("server:newnote", savedNote);
// });

// socket.on("client:deletenote", async (id) => {
//   await Note.findByIdAndDelete(id);
//   console.log("Deleted: " + id);
//   emitNotes();
// });

// socket.on("client:getnote", async (id) => {
//   const note = await Note.findById(id);
//   io.emit("server:selectednote", note);
//   emitNotes();
// });

// socket.on("client:updatenote", async (updatedNote) => {
//   await Note.findByIdAndUpdate(updatedNote._id, {
//     title: updatedNote.title,
//     description: updatedNote.description,
//   });
//   emitNotes();
// });
