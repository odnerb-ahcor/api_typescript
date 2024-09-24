import { Router } from "express";
import bcrypt from "bcrypt";
import "express-async-errors";

import { login, signUp } from "../user/userController";

const router: Router = Router();

router.post('/api/createUser', signUp);
router.post('/api/login', login);

export default router;