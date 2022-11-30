import express from "express";

import { getItems, getItemById } from "../controllers/itemsController.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItemById);
//router.post("/:id", createProduct);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
