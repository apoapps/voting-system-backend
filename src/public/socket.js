import { clientNewNote, serverLoadNotes } from "./constants.js";
const socket = io();

export const loadNotes = (callback) => {
  socket.on("server:loadnotes", callback);
};

export const saveNote = (title, description) => {
  socket.emit("client:newnote", {
    title,
    description,
  });
};

//cuando una nota nueva sea emitida
export const onNewNote = (callback) => {
  socket.on(
    "server:newnote",
    callback
  );
};

//funciones del cliente para backend
