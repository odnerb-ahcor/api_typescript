import { Router } from "express";
import bcrypt from "bcrypt";
import "express-async-errors";

import { login, signUp } from "../user/userController";
import listarClientes from "../teste/testeController";

const router: Router = Router();

router.post('/api/user/createUser', signUp);
router.post('/api/user/login', login);
router.post('/teste', listarClientes);

export default router;