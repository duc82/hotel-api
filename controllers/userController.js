const asyncHandler = require("../utils/asyncHandler");
const db = require("../models/index");
const bcrypt = require("bcryptjs");

const userController = {
  register: asyncHandler(async (req, res) => {
    const { fullName, email, phone, age, password } = req.body;

    const user = await db.User.create({
      fullName,
      email,
      phone,
      age,
      password: bcrypt.hashSync(password),
    });

    res.status(201).json({ message: "Register success", user });
  }),
};

module.exports = userController;
