// controllers/authController.js
// import User from "../models/User.js";    
import bcrypt from "bcryptjs";
// import { generateToken } from "../utils/generateToken.js";

import { generateToken } from "../utils/generateToken.js";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);

    res.status(201).json({
      message: "User created successfully!!!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken({ id: user._id });

    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// export const getProfile = async (req, res) => {
//   try {
//     // req.user is populated by protect middleware
//     res.json({ user: req.user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// decode token route (wrap in route)
export const decodeTokenRoute = async (req, res) => {
  // decodeToken middleware returns response directly; kept for completeness
};
