import { Schema, model } from "mongoose";

const schema = new Schema(

    
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  //Propiedades del modelo
  {
    timestamps: true,
  }
);

export default model("Note", schema);
