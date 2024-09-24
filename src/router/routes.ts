import { Router } from "express";
import bcrypt from "bcrypt";
import "express-async-errors";

import { login, signUp } from "../user/userController";

const router: Router = Router();

router.post('/api/user/createUser', signUp);
router.post('/api/user/login', login);

export default router;