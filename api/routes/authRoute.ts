import express, { Router } from "express";

import { signUp } from "../controllers/authController";

const router: Router = express.Router();

router.post("/sign-up", signUp);

export default router;
