const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("./../schema/userSchema");
const { log } = require("debug");
const User = new mongoose.model("User", userSchema);
const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({
      message: "Signup was successfully!",
    });
  } catch {
    res.status(500).json({
      message: "Signup failed!",
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const user = await User.find({ user: req.body.username });

  if (user && user.length > 0) {
    try {
      const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);

      if (isValidPassword) {
        // generate token
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        res.status(200).json({
          access_token: token,
          message: "Login successful!",
        });
      } else {
        res.status(401).json({
          error: "Authentication failed!",
        });
      }
    } catch {
      res.status(401).json({
        error: "Authentication failed!",
      });
    }
  } else {
    res.status(401).json({
      error: "Authentication failed!",
    });
  }
});

// GET ALL USERS
router.get("/all", async (req, res) => {
  try {
    const users = await User.find({
      status: "active",
    }).populate("todos");

    res.status(200).json({
      data: users,
      message: "Success!",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "There was an error on the server side!",
    });
  }
});

module.exports = router;
