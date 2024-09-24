import express from "express";
import swaggerUi from "swagger-ui-express";

import router from "./router/routes";
import swaggerDocs from "./swagger.json";
import { routerProtected } from "./router/routerProtected";
import { errorMiddleware } from './middlewares/error';

// dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(router);
app.use(routerProtected);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});