import express from "express"; // Importing express
const contactRouter = express.Router(); // Creating a new router instance
import Message from "../models/message-model.js";
import validate from "../middlewares/validate-middleware.js";
import { messageSchema } from "../validator/contact-validator.js";
contactRouter
  .route("/contact")
  .post(validate(messageSchema), async (req, res) => {
    const { email, subject, message } = req.body;

    const msg = await Message.create({ email, subject, message });

    res.status(200).json(msg);
  });

export default contactRouter; // Exporting the router using ES6 syntax
