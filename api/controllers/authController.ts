import { Request, Response } from "express";
import User from "../modals/UserModal";
import * as bcrypt from "bcryptjs";

export const signUp = async (req: Request, res: Response) => {
  const {
    username,
    email,
    password,
  }: { username: string; email: string; password: string } = req.body;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json("Created successfuly");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
