import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      uniquee: true,
    },
    email: {
      type: String,
      required: true,
      uniquee: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userScheme);
export default User;
