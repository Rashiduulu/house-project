import express, { Router } from "express";

import { test } from "../controllers/userController";

const router: Router = express.Router();

router.get("/test", test);

export default router;
