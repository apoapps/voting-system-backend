import { saveNote } from "./socket.js";

const notesList = document.querySelector("#notes");

//componente de una nota
export const noteUI = (note) => {
  const div = document.createElement("div");
  div.innerHTML = `
     <div>
    <h1> ${note.title} </h1>

    <div>
        <button> Delete </button>
        <button> Editar </button>
    </div>

    <p> ${note.description} </p>

     </div>
    `;
  return div;
};

export const renderNotes = (notes) => {
  notes.forEach((note) => notesList.append(noteUI(note)));
};

export const onHandleSubmit = (event) => {
  //frontend
  event.preventDefault();
  saveNote(noteForm["title"].value, noteForm["description"].value);
};

export const appendNote = (note) => {
  notesList.append(noteUI(note));
};
