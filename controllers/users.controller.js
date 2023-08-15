const usersModel = require("../models/usersModel");
const jwt = require("jsonwebtoken");

const registrations = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: `Empty Fields are not allowed` });
    }
    await usersModel.insertMany({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    return res.status(200).json({ message: `Successfully updated` });
  } catch (error) {
    return res.status(500).json({ message: `Error updating` });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: `Empty Fields are not allowed` });
    }
    let result = await usersModel.findOne({ email: email, password: password });
    console.log(result);
    if (!result) {
      return res.status(400).json({ message: `Invalid Email or Password` });
    }
    const expireTime = process.env.jwtExpiryTime;
    const privateKey = process.env.jwtPrivateKey;
    console.log(expireTime, privateKey);
    const token = jwt.sign({email}, privateKey, {expiresIn: expireTime});
    console.log(token);
    return res.status(200).json({ message: `Successfully logged In` , token: token });
  } catch (error) {
    return res.status(500).json({ message: `Error updating` , error: error });
  }
};

module.exports = { registrations, login };
