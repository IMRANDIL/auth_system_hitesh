const User = require("../models/User");
const bcrypt = require("bcryptjs");
exports.registerUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!(firstname && lastname && email && password)) {
    return res.status(400).json({
      message: "Please provide all the required fields",
    });
  }

  try {
    //check if user already exists..

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash the password now...and token generation....

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname,
      lastname,
      email: email.toLowerCase(),
      password: hashedPassword,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
