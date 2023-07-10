// User Model for Cabildo Members

import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    position: {
      type: String,
      // The position or role of the user in the cabildo (e.g., President, Councilor, Secretary, etc.)
    },
    municipalityNumber: {
      type: Number,
      // The number assigned to the municipality where the user belongs
    },
    last_name: {
      type: String,
      // The last name of the user
    },
    middle_name: {
      type: String,
      // The middle name of the user
    },
    first_name: {
      type: String,
      // The first name of the user
    },
    gender: {
      type: String,
      // The gender of the user
    },
    party: {
      type: String,
      // The political party affiliation of the user
    },
    start_date: {
      type: Date,
      // The start date of the user's term in the cabildo
    },
    end_date: {
      type: Date,
      // The end date of the user's term in the cabildo
    },
    member_status: {
      type: String,
      // The status of the user as a cabildo member (e.g., Active, Inactive, Resigned, etc.)
    },
    member_photo: {
      type: Buffer,
      // The photo of the user
    },
    password: {
      type: String,
      // The password of the user
    },
  },
  // Model options
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
