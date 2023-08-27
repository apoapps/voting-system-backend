import express from "express";
import User from "./models/User";
import { getUserByPassword } from "./functions/get_user_by_password.js";

const app = express();

app.use(express.json()); // Para poder parsear el cuerpo JSON de las solicitudes

// Obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error al obtener usuarios:", err);
    res.status(500).send("Error interno del servidor");
  }
});

// Obtener solo un usuario
app.get("/user", async (req, res) => {
  const user = await getUserByPassword(req.query.password);
  if (user) {
    res.json(user);
    console.log(user);
  } else {
    console.log("Cannot get user");
    res.status(400).send("Error en los datos del usuario");
  }
});

// Crear un nuevo usuario
app.post("/users", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error al crear usuario:", err);
    res.status(400).send("Error en los datos del usuario");
  }
});

// Actualizar un usuario por ID
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    res.json(user);
  } catch (err) {
    console.error("Error al actualizar usuario:", err);
    res.status(400).send("Error en los datos del usuario");
  }
});

// Eliminar un usuario por ID
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    res.status(204).send(); // Respuesta exitosa sin contenido
  } catch (err) {
    console.error("Error al eliminar usuario:", err);
    res.status(500).send("Error interno del servidor");
  }
});

export default app;
