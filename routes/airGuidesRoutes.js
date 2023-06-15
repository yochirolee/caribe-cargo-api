import express from "express";

import {
	getAirGuides,
	createAirGuide,
	updateAirGuide,
	deleteAirGuide,
	getCurrentAirGuide,
} from "../controllers/airGuideController.js";

const router = express.Router();

router.get("/", getAirGuides);
router.get("/current", getCurrentAirGuide);
router.post("/create", createAirGuide);
router.put("/update", updateAirGuide);
router.delete("/delete/:id", deleteAirGuide);

export default router;
