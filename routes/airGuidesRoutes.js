import express from "express";

import {
	getAirGuides,
	createAirGuide,
	updateAirGuide,
	deleteAirGuide,
} from "../controllers/airGuideController.js";

const router = express.Router();

router.get("/", getAirGuides);
router.post("/create", createAirGuide);
router.put("/update", updateAirGuide);
router.delete("/delete/:id", deleteAirGuide);

export default router;
