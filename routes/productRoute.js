import express from "express";

import {
	getProducts,
	getProductById,
	findProducts,
	findInvoices,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", findProducts);
router.get("/:id", getProductById);
router.post("/findInvoices", findInvoices);
//router.post("/:id", createProduct);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
