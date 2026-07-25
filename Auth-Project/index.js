import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import loggerMiddleware from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use(errorHandler);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Auth Server running on http://localhost:${PORT}`);
});