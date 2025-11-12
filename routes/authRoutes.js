// // routes/authRoutes.js
// import express from "express";
// import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
// import { protect, decodeToken } from "../middleware/authMiddleware.js";
// import { signupValidation, loginValidation } from "../utils/validators.js";

// const router = express.Router();

// /**
//  * POST /api/auth/signup
//  */
// router.post("/signup", signupValidation, registerUser);

// /**
//  * POST /api/auth/login
//  */
// router.post("/login", loginValidation, loginUser);

// /**
//  * GET /api/auth/me  (protected)
//  */
// router.get("/me", protect, getProfile);

// /**
//  * POST /api/auth/decode (token decode for debugging)
//  * header: Authorization: Bearer <token>
//  */
// router.post("/decode", decodeToken);

// export default router;






import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { getProfile, updateProfile, deleteProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user and get JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */


/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Get user profile using JWT
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile data
 */


router.post("/register", registerUser);
router.post("/login", loginUser);

// router.get("/profile", protect, getProfile);

// router.put("/profile", protect, updateProfile);

// router.delete("/profile", protect, deleteProfile);


export default router;
