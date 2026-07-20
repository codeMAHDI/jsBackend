import express from "express"
import { addProduct, getProducts, UpdateProduct, DeleteProduct } from '../controllers/productController.js'


const router = express.Router();

router.post("/add-product", addProduct);
router.get("/get-products", getProducts);
router.put("/update-product/:id", UpdateProduct);
router.delete("/delete-product/:id", DeleteProduct);



export default router;

