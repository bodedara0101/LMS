import Message from "../models/message-model";

const contact = async (req, res) => {
  const { email, subject, message } = req.body;

  const msg = await Message.create({ email, subject, message });

  res.status(200).json(msg);
};

export default contact;

//-------------------------------- NOT WORKING ---------------------
