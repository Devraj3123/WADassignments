const express = require("express");

const User = require("../models/user");
// const { get } = require('http');

const authRouter = express.Router();

const getUser = async (req, res) => {
  var user = await User.find();

  return res.status(200).json(user);
};

const createUser = async (req, res) => {

  const { name, email, password } = req.body;

  var user = User({ name: name, email: email, password: password });
  user = await user.save();
  return res.status(200).json(user);
};
const deleteUser = async (req, res) => {
  const { name } = req.body;
  try {
    const user = await User.findOneAndDelete({ name });
    if (!user) {
      return res.status(404).json({ message: `User '${name}' not found` });
    }
    return res.status(200).json({ message: `User deleted successfully` });
  } catch (e) {
    return res.status(500).json({ message: "An error occured" });
  }
};

const updateUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const existinguser = await User.findOne({ name });
    var newvalues = { $set: { email: email } };
    if (!existinguser) {
      return res.status(400).json({ msg: "Username does not exist" });
    }
    var user= await User.updateOne({name: name},newvalues);
    return res.status(200).json(user);

  } catch (error) {
    return res.status(500).json({ message: "An error Occured" });
  }
};

authRouter.get("/", getUser);
authRouter.post("/create-user", createUser);
authRouter.post("/delete-user", deleteUser);
authRouter.post("/update-user", updateUser);

module.exports = authRouter;
