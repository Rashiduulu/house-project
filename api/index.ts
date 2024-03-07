import express, { json } from "express";
import userRouter from "./routes/UserRoute";
import authRouter from "./routes/authRoute";

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
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3001, () => {
  console.log("sever is running on port 3000!");
});

app.use((err: any, req: any, res: any, next: any) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Interval Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
