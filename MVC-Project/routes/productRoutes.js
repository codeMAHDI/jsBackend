import express from "express"
import { addProduct, getProducts, UpdateProduct, DeleteProduct, getProductDetails, testApi, UpdateProducts , DeleteProducts } from '../controllers/productController.js'


const router = express.Router();

router.post("/add-product", addProduct);
router.get("/get-products", getProducts);
router.put("/update-product/:id", UpdateProduct);
router.delete("/delete-product/:id", DeleteProduct);
router.get("/product/:id", getProductDetails);
router.post("/test-api/:id", testApi);
router.put("/update-product/:id", UpdateProducts);
router.delete("/delete-product/:id",DeleteProducts);


export default router;