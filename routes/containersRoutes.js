import express from "express";

import {
	getContainers,
	getContainerById,
	getContainersByState,
	getContainersStopsByRecievers,
	getIncomeByContainerId
} from "../controllers/containersController.js";

const router = express.Router();

router.get("/", getContainers);
router.get("/:id", getContainerById);
router.get("/stopsByRecievers/:id", getContainersStopsByRecievers);
router.get("/income/:id", getIncomeByContainerId);
router.get("/:state/state", getContainersByState);

export default router;
