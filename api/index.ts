import express from "express";

import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/house-project")
  .then(() => {
    console.log("Connected to MD");
  })
  .catch((error: Error) => {
    console.log("Error connecting to the database: " + error);
  });

const app = express();

app.listen(3000, () => {
  console.log("sever is running on port 3000!");
});
