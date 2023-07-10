import { saveNote, deleteNote, getNoteById, updateNote } from "./socket.js";

const notesList = document.querySelector("#notes");
const title = document.querySelector("#title");

const description = document.querySelector("#description");

let savedId = "";

//componente de una nota
export const noteUI = (note) => {
  const div = document.createElement("div");
  div.innerHTML = `
     <div>
    <h1> ${note.title} </h1>

    <div>
        <button class="delete" data-id="${note._id}"> Delete </button>
        <button class="edit" data-id="${note._id}"> Editar </button>
    </div>

    <p> ${note.description} </p>

     </div>
    `;

  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".edit");
  btnDelete.addEventListener("click", (e) => {
    deleteNote(btnDelete.dataset.id);
  });
  btnUpdate.addEventListener("click", (e) => {
    getNoteById(btnUpdate.dataset.id);
  });
  return div;
};

export const renderNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach((note) => notesList.append(noteUI(note)));
};

export const fillform = (note) => {
  title.value = note.title;
  description.value = note.description;
  savedId = note._id;
};

export const onHandleSubmit = (event) => {
  //frontend
  event.preventDefault();

  if (savedId) {
    updateNote(savedId, title.value, description.value);
    //despues de actualizarse
    console.log("updated");
    savedId = null;
    title.value = "";
    description.value = "";
  } else {
    saveNote(title.value, description.value);
  }
};

export const appendNote = (note) => {
  notesList.append(noteUI(note));
};
