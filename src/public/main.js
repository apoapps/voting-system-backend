import { loadNotes, onNewNote } from "./socket.js";
import { onHandleSubmit, renderNotes, appendNote } from "./ui.js";

//Cargar Notas
onNewNote(appendNote);
loadNotes(renderNotes);

const noteForm = document.querySelector("#noteForm");

noteForm.addEventListener("submit", onHandleSubmit);
