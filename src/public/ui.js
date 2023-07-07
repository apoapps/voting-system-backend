import { saveNote } from "./socket.js";

export const onHandleSubmit = (event) => {
  //frontend
  event.preventDefault();
  saveNote(noteForm["title"].value, noteForm["description"].value);
};
