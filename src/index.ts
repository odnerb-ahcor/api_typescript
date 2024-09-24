import express from "express";
// import dotenv from "dotenv";
import router from "./router/routes";
import { routerProtected } from "./router/routerProtected";
import { errorMiddleware } from './middlewares/error';

// dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(router);
app.use(routerProtected);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});