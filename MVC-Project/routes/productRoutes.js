import express from "express"
import { addProduct } from "../controllers/productController.js";


const router= express.Router();

router.get("/add-product", addProduct);

export default router;