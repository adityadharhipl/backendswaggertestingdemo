import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  if (!userId) {
    throw new Error("User ID missing while generating token");
  }

  return jwt.sign(
    { id: userId }, // ✅ must be an object
    process.env.JWT_SECRET || "secret",
    { expiresIn: "30d" }
  );
};
