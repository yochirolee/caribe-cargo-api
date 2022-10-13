import express from "express";

import { getCustomers, getCustomersByMobile } from "../controllers/customersController.js";

const router = express.Router();

router.get("/", getCustomers);
router.get("/:mobile", getCustomersByMobile);
//router.post("/:id", createProduct);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
