import {loadUsers, onNewUser, onSelected} from "./socket.js";
import {onHandleSubmit, renderUser, appendUser} from "./ui.js";


/*import { loadUser, onNewUser, onSelected } from "./socket.js";
import { onHandleSubmit, renderUser, appendUser, fillform } from "./ui.js";

//Cargar Notas
onNewUser(appendUser);
loadUser(renderUser);
onSelected(fillform);
*/
onNewUser(appendUser);
loadUsers(renderUser);
onSelected();


const userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", onHandleSubmit)
