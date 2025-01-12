import express from "express"; // Importing express
const placeOrderRoute = express.Router(); // Creating a new router instance
import orderPlaced from "../models/orderPlaced-model.js";
placeOrderRoute.route("/orderPlace").post(async (req, res) => {
  const {
    address,
    city,
    contact,
    email,
    name,
    paymentMeth,
    pinCode,
    reachMethod,
    amount,
    items,
    arrayObj,
  } = req.body;

  const msg = await orderPlaced.create({
    address,
    city,
    contact,
    email,
    name,
    paymentMeth,
    pinCode,
    reachMethod,
    amount,
    items,
    arrayObj,
  });

  res.status(200).json(msg);
});

export default placeOrderRoute; // Exporting the router using ES6 syntax
