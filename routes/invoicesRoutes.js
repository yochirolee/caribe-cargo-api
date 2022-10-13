import express from "express";

import { getInvoices, getInvoicesById } from "../controllers/invoicesController.js";

const router = express.Router();

router.get("/", getInvoices);
router.get("/:id", getInvoicesById);
//router.post("/:id", createProduct);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
