// backend.js - Código de servidor para Socket.IO
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
      lastName: user.lastName,
      firstName: user.firstName,
      gender: user.gender,
      party: user.party,
      startDate: user.startDate,
      endDate: user.endDate,
      memberStatus: user.memberStatus,
      memberPhoto: user.memberPhoto,
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

        // Guardar los cambios en la base de datos
        await userToUpdate.save();

        // Después de guardar los cambios, obtener todos los usuarios actualizados desde la base de datos
        const updatedUsers = await User.find();

        // Emitir la lista actualizada de usuarios a todos los clientes
        io.emit("server:updateuser", { users: updatedUsers }); // Utiliza 'updatedUsers' en lugar de 'serializedUsers'

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

        // Creamos una nueva instancia del modelo User con los datos recibidos del cliente
        const newUser = new User({
          position: addedUser.position,
          municipalityNumber: addedUser.municipalityNumber,
          lastName: addedUser.last_name,
          firstName: addedUser.first_name,
          gender: addedUser.gender,
          party: addedUser.party,
          startDate: addedUser.start_date,
          endDate: addedUser.end_date,
          memberPhoto: addedUser.member_status,
          password: addedUser.password,
          // Agregar el resto de las propiedades del usuario aquí según corresponda
        });

        // Guardamos el nuevo usuario en la base de datos
        await newUser.save();

        // Obtenemos todos los usuarios actualizados desde la base de datos
        const updatedUsers = await User.find();

        // Emitimos la lista actualizada de usuarios a todos los clientes
        io.emit("server:adduser", { users: updatedUsers });

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
    });
    socket.on("client:deleteuser", async (data) => {
      try {
        const { password } = data;

        const userToDelete = await User.findOne({ password });

        if (!userToDelete) {
          io.emit("server:deleteusererror", {
            message: "Usuario no encontrado.",
          });
          return;
        }

        await userToDelete.remove();

        io.emit("server:userdeleted", { password });

        console.log("Usuario eliminado:", userToDelete);
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
        io.emit("server:deleteusererror", {
          message: "Error al eliminar usuario.",
        });
      }
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
