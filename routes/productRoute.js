import express from "express";

import { getProducts, getProductById, findProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", findProducts);
router.get("/:id", getProductById);
//router.post("/:id", createProduct);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
