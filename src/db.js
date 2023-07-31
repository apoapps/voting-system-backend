import { connect } from "mongoose";
import { MONGODB_URI } from "./config";
import User from "./models/User";

//Conectar MongoDB
export const connectDB = async () => {
  try {
    const dbStatus = await connect(MONGODB_URI);
    console.log("Mongo DB name:" + dbStatus.connection.name);

    // Verificar si existe el administrador con la contraseña "1209" en la base de datos
    const adminUser = await User.findOne({
      position: "Administrador",
    });

    // Si no existe el administrador, lo creamos en la base de datos
    if (!adminUser) {
      const adminData = {
        position: "Administrador",
        municipalityNumber: 999,
        // Agregar el resto de las propiedades válidas del usuario administrador
        // Por ejemplo:
        last_name: "Admin",
        first_name: "Admin",
        gender: "Male",
        party: "Admin",
        start_date: Date(),
        end_date: "2040",
        member_status: "Active",
        member_photo: "admin_photo.jpg",
        password: "1209", // La contraseña del administrador
      };
      await User.create(adminData);
      console.log("Administrador creado en la base de datos.");
    }
  } catch (error) {
    console.log(error);
  }
};
