import { saveNote, deleteNote } from "./socket.js";

const notesList = document.querySelector("#notes");

//componente de una nota
export const noteUI = (note) => {
  const div = document.createElement("div");
  div.innerHTML = `
     <div>
    <h1> ${note.title} </h1>

    <div>
        <button class="delete" data-id="${note._id}"> Delete </button>
        <button class="edit"> Editar </button>
    </div>

    <p> ${note.description} </p>

     </div>
    `;

  const btnDelete = div.querySelector(".delete");
  btnDelete.addEventListener("click", (e) => {
    deleteNote(btnDelete.dataset.id);
  });
  return div;
};

export const renderNotes = (notes) => {
  notesList.innerHTML = "";
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
