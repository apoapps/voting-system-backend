import { loadNotes } from "./socket.js";
import { onHandleSubmit } from "./ui.js";

//Cargar Notas
loadNotes();

const noteForm = document.querySelector("#noteForm");

noteForm.addEventListener("submit", onHandleSubmit);
