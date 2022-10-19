import express from "express";

import {
	getRecieverById,
	getRecievers,
	getRecieverByMobile,
} from "../controllers/recieversController.js";

const router = express.Router();

router.get("/", getRecievers);
router.get("/:id", getRecieverById);
//router.post("/:id", createProduct);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
