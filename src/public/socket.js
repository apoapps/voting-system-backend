const socket = io()

export const loadUsers = (callback) => {
  socket.on("server:loadusers", callback);
};


export const saveUser = (position, municipalityNumber, last_name, middle_name, first_name, gender, party, start_date, end_date, member_status, member_photo, password) => {
  socket.emit("client:newuser", {
    position,
    municipalityNumber,
    last_name,
    middle_name,
    first_name,
    gender,
    party,
    start_date,
    end_date,
    member_status,
    member_photo,
    password
  });
};

export const onNewUser = (callback) => {
  socket.on('server:newuser', callback);
};

export const deleteUser = id => {
  socket.emit('client:deleteuser', id);
};

export const getUserById = id => {
  socket.emit('client:getuser', id);
};

export const onSelected = () => {
  socket.on('server:selecteduser', user => {
    console.log(user);
  })
}




/* CODIGO PARA CARGAR NOTAS*/

/*
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
  socket.on("server:newnote", callback);
};

//eliminar nota
export const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};

export const getNoteById = (id) => {
  socket.emit("client:getnote", id);
};

export const onSelected = (callback) => {
  socket.on("server:selectednote", callback);
};

export const updateNote = (id, title, description) => {
  socket.emit("client:updatenote", {
    _id: id,
    title,
    description,
  });
};

//funciones del cliente para backend
*/