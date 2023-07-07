const socket = io();

export const loadNotes = () => {
  socket.on("loadNotes", (notes) => {
    console.log(notes);
  });
};

export const saveNote = (title, description) => {
  socket.emit("newNote", {
    title,
    description,
  });
};

//funciones del cliente para backend
