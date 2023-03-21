import express from "express";

import { getContainerReport, getTrackingByHBL } from "../controllers/trackingController.js";

const router = express.Router();

router.get("/containerReport/:id", getContainerReport);
router.get("/:id", getTrackingByHBL);

export default router;
