import e from "express";
const app = e();
import router from "./router/auth-router.js";
import mongoCD from "./utils/db.js";
import { config } from "dotenv";
import errorMiddleware from "./middlewares/error-middleware.js";
import contactRouter from "./router/contact-route.js";
import cors from "cors";
import placeOrderRoute from "./router/placeOrderRoute.js";
const coreOptions = {
  origin: "http://localhost:5173",
  methoda: "GET , POST , PUT , DELATE , PATCH , HEAD ",
  Credential: true,
};

app.use(cors(coreOptions));
config();
app.use(e.json());
app.use("", router);
app.use("", contactRouter);
app.use("", placeOrderRoute);
app.use(errorMiddleware);

mongoCD().then(() => {
  console.log("connection sucessful");
  app.listen(process.env.PORT, () => {
    console.log("Running...............");
  });
});
