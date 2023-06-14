import {
	db_getAirGuides,
	db_createNewAirGuide,
	db_updateAirGuide,
	db_deleteAirGuide,
} from "../database/dbAirGuides.js";

export const getAirGuides = async (req, res) => {
	console.log("getAirGuides");
	try {
		const result = await db_getAirGuides();
		res.status(200).json({ data: result });
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
};

export const createAirGuide = async (req, res) => {
	console.log(res.body, "res.body");
	try {
		const result = await db_createNewAirGuide(req.body);
		res.status(200).json({ data: result });
	} catch (err) {
		console.log(err.message);
		res.status(400).json(err);
	}
};

export const updateAirGuide = async (req, res) => {
	try {
		const result = await db_updateAirGuide(req.body);
		res.status(200).json({ data: result });
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
};

export const deleteAirGuide = async (req, res) => {
	const { id } = req.params;
	if (!id) return res.status(400).json({ message: "id is required" });
	try {
		const result = await db_deleteAirGuide(id);
		res.status(200).json({ data: result });
	} catch (err) {
		console.log(err, "errpr m");
		res.status(400).json(err);
	}
};
