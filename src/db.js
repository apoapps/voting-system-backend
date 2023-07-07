import { connect } from "mongoose";

import { MONGODB_URI } from "./config";

//Conectar MongoDB

export const connectDB = async () => {
  try {
    const dbStatus = await connect(MONGODB_URI);
    console.log(dbStatus.Connection.name);
  } catch (error) {
    console.log(error);
  }
};
