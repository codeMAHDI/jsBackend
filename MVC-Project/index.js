import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
import loggerMiddleware from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(loggerMiddleware);
app.use("/api/v1", productRouter);


app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});