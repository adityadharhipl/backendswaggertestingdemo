// server.js
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import corsMiddleware from "./middleware/corsConfig.js";
import { swaggerUi, swaggerSpec } from "./swagger/swagger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { swaggerDocs } from "./config/swagger.js";


dotenv.config();
const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(corsMiddleware);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Routes
app.use("/api/auth", authRoutes);
swaggerDocs(app);
app.get("/", (req, res) => res.send("API is up and running"));

// Error handler (last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
