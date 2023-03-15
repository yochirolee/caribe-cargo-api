import express from "express";

import {
	getInvoices,
	getInvoicesByDateRange,
	getInvoicesById,
} from "../controllers/invoicesController.js";

const router = express.Router();

router.get("/byDateRange", getInvoicesByDateRange);
router.get("/:id", getInvoicesById);
router.get("/", getInvoices);
//router.post("/:id", createProduct);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
