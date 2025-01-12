import express from "express"; // Importing express
const router = express.Router(); // Creating a new router instance
import {
  home,
  registration,
  getusers,
  delateuser,
  login,
  userVerify,
  getmessage,
  getorders,
  addproduct,
  getproduct,
  getorderdetail,
} from "../controllers/authControllers.js";
import { registerSchema, loginSchema } from "../validator/auth-validator.js";
import validate from "../middlewares/validate-middleware.js";
import authMiddleware from "../middlewares/auth-middleware.js";

router.route("/").get(home);

router.route("/registration").post(validate(registerSchema), registration);

router.route("/addproduct").post(addproduct);

router.route("/getproduct").get(getproduct);

router.route("/login").post(validate(loginSchema), login);

router.route("/userVerify").get(authMiddleware, userVerify);

router.route("/getusers").get(getusers);

router.route("/delateuser").post(delateuser);

router.route("/getmessage").get(getmessage);

router.route("/getorders").get(getorders);

router.route("/getorderdetail").post(getorderdetail);

export default router; // Exporting the router using ES6 syntax
