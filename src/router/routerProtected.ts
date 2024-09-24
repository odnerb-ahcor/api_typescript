import "express-async-errors"
import { Router } from "express";
import { authMiddleware } from "../middlewares/jwt";
import { listUsers } from "../user/userController";

const router: Router = Router();

router.use(authMiddleware);

router.get('/api/users', listUsers);

export const routerProtected = router;