import {saveUser, deleteUser, getUserById} from "./socket.js";

const usersList = document.querySelector('#users')

const userUI = user => {
  const div = document.createElement('div')
  div.innerHTML = `
      <div>
      <h1>${user.position}</h1>
      <p>${user.municipalityNumber}</p>
      <p>${user.last_name}</p>
      <p>${user.middle_name}</p>
      <p>${user.first_name}</p>
      <p>${user.gender}</p>
      <p>${user.party}</p>
      <p>${user.start_date}</p>
      <p>${user.end_date}</p>
      <p>${user.member_status}</p>
      <p>${user.member_photo}</p>
      <p>${user.password}</p>

      <div>
        <button class="delete" data-id="${user._id}">Delete</button>
        <button class="update" data-id="${user._id}">Update</button>
      </div>
    </div>
  `
  const btnDelete = div.querySelector('.delete')
  const btnUpdate = div.querySelector('.update')

  btnDelete.addEventListener('click', e => deleteUser(btnDelete.dataset.id))
  btnUpdate.addEventListener('click', e => getUserById(btnUpdate.dataset.id))

  return div;
}

export const renderUser = users => {
  usersList.innerHTML = '';
  users.forEach(user =>usersList.append(userUI(user)))
}


export const onHandleSubmit = (e) => {
  e.preventDefault()
  saveUser(
    userForm["position"].value,
    userForm["municipalityNumber"].value,
    userForm["last_name"].value,
    userForm["middle_name"].value,
    userForm["first_name"].value,
    userForm["gender"].value,
    userForm["party"].value,
    userForm["start_date"].value,
    userForm["end_date"].value,
    userForm["member_status"].value,
    userForm["member_photo"].value,
    userForm["password"].value,
  );
}

export const appendUser = user => {
  usersList.append(userUI(user))
}

/*
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
*/