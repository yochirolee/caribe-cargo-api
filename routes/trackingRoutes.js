import express from "express";

import { getTrackingByHBL } from "../controllers/trackingController.js";

const router = express.Router();

router.get("/:id", getTrackingByHBL);
export default router;
