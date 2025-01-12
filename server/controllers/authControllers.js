import User from "../models/user-model.js";
import Message from "../models/message-model.js";
import orderPlaced from "../models/orderPlaced-model.js";
import Product from "../models/product-model.js";

const home = async (req, res) => {
  try {
    res.status(200).send("It's home here....");
  } catch (error) {
    res.status(200).send(error);
  }
};

//REGISTRATION LOGIC----------
// GET DATA FROM REQUEST, CHECK EMAIL IS NOT AVALABLE IN DB AFTER => ENCRYPT THE PASSWORD AND STORE TO DB
const registration = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    const userExsit = await User.findOne({ email });

    if (userExsit) {
      return res.status(400).json({ msg: "user Alredy exist" });
    }

    const userCreated = await User.create({
      name,
      email,
      password,
      isAdmin,
    });

    //after registration genrating token for user
    res.status(200).json({
      stetus: "Sucess",
      token: await userCreated.genrateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(200).send("sorry", error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//LOGIN LOGIC----------------------------------------------------------------------------------------------------------------------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExsit = await User.findOne({ email }); // if email is found on db userExsit variable store all info of the user

    if (!userExsit) {
      return res.status(400).json({ msg: "email is not found" });
    } else {
      const userValid = await userExsit.checkPassword(password);

      if (userValid) {
        res.status(200).json({
          stetus: "Login Sucess",
          token: await userExsit.genrateToken(),
          userId: userExsit._id.toString(),
        });
      } else {
        res.status(401).json({ msg: "invalid password" });
      }
    }
  } catch (error) {
    res.status(200).send(error);
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//SEND USER DATA LOGIC---------------------------------------------------------------------------------------------
const userVerify = async (req, res) => {
  try {
    const userData = req.user; // accessing the custom data from request
    return res.status(200).json(userData); // returnig data when token is verified
  } catch (error) {
    res.status(401).send(error);
  }
};
//------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//Delate USER DATA FROM DB LOGIC----------
const delateuser = async (req, res) => {
  const { _id } = req.body;

  try {
    // Find and delete the user by their _id
    const deletedUser = await User.findByIdAndDelete(_id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getmessage = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//ADD PRODUCT----------
const addproduct = async (req, res) => {
  try {
    const {
      author,
      category,
      description,
      image,
      name,
      rating,
      realPrice,
      sellPrice,
      year,
    } = req.body;

    const done = await Product.create({
      name,
      author,
      category,
      description,
      image,
      rating,
      realPrice,
      sellPrice,
      year,
    });

    res.status(200).json(done);
  } catch (error) {
    res.status(200).send("sorry", error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getproduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getorders = async (req, res) => {
  try {
    const orders = await orderPlaced.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(found);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getorderdetail = async (req, res) => {
  const data = req.body;
  try {
    const found = await orderPlaced.find({ _id: data.id });

    if (found) {
      res.status(200).json(found);
    } else {
      res.status(500).json({ msg: "Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------
export {
  registration,
  home,
  getusers,
  login,
  userVerify,
  getmessage,
  getorders,
  addproduct,
  getproduct,
  getorderdetail,
  delateuser,
};
