// utils/validators.js
import { body, validationResult } from "express-validator";

export const signupValidation = [
  body("name").notEmpty().withMessage("name required").isLength({ min: 3 }).withMessage("min 3 chars"),
  body("email").isEmail().withMessage("valid email required"),
  body("password").isLength({ min: 6 }).withMessage("password min 6 chars"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

export const loginValidation = [
  body("email").isEmail().withMessage("valid email required"),
  body("password").notEmpty().withMessage("password required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];
