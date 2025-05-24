import User from "../models/user-model.js";
import Message from "../models/message-model.js";
import orderPlaced from "../models/orderPlaced-model.js";
//REGISTRATION LOGIC----------
// GET DATA FROM REQUEST, CHECK EMAIL IS NOT AVALABLE IN DB AFTER => ENCRYPT THE PASSWORD AND STORE TO DB
const registration = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User Alredy Exist!" });
    }

    console.log("hello")

    const userCreated = await User.create({
      name,
      email,
      password,
      isAdmin,
    });

    console.log(userCreated)

    //after registration genrating token for user
    res.status(200).json({
      message: "Registration Success...",
      stetus: "Sucess",
      token: await userCreated.genrateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Registration failed", error: error.message });
    res.status(400).send(error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//LOGIN LOGIC----------------------------------------------------------------------------------------------------------------------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email }); // if email is found on db userExist variable store all info of the user

    if (!userExist) {
      return res.status(400).json({ message: "email is not found" });
    } else {
      const userValid = await userExist.checkPassword(password);

      if (userValid) {
        res.status(200).json({
          message: "Login Sucess...",
          token: await userExist.genrateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(400).json({ message: "invalid password" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Login failed", error: error.message });
    console.log(error);
  }
};

const contact = async (req, res) => {
  const { email, subject, message } = req.body;

  const msg = await Message.create({ email, subject, message });

  res.status(200).json(msg);
};

const placeOrderRoute = async (req, res) => {
  const {
    address,
    city,
    contact,
    email,
    name,
    paymentMethod,
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
    paymentMethod,
    pinCode,
    reachMethod,
    amount,
    items,
    arrayObj,
  });

  res.status(200).json(msg);
};

export { registration, login, contact, placeOrderRoute };
