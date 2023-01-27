import { db_getHBL } from "../database/dbTracking.js";

export const getTrackingByHBL = async (req, res) => {
	const { id } = req.params;
	try {
		const rows = await db_getHBL(id);
		res.status(200).json(rows);
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
