import express from "express";

import {
	getContainers,
	getContainerById,
	getContainersByState,
	getContainersStopsByRecievers,
} from "../controllers/containersController.js";

const router = express.Router();

router.get("/", getContainers);
router.get("/:id", getContainerById);
router.get("/stopsByRecievers/:id", getContainersStopsByRecievers);
router.get("/:state/state", getContainersByState);
//router.post("/:id", createProduct);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
