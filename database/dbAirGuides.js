import { query } from "../services/db.js";

export const db_getAirGuides = async () => {
	return await query("SELECT * from air_guides");
};

export const db_getAirGuideById = async (id) => {
	const result = await query("SELECT * FROM air_guides WHERE id=?", [id]);

	return result;
};

export const db_getAirGuideByAirGuideNumber = async (airGuideNumber) => {
	const result = await query("SELECT * FROM air_guides WHERE air_guide_number=?", [airGuideNumber]);

	return result;
};

export const db_createNewAirGuide = async (airGuide) => {
	if (!airGuide.air_guide_number) throw new Error("Air Guide Number is required");
	const result = await query("INSERT INTO air_guides SET ?", [airGuide]);
	return result;
};

export const db_updateAirGuide = async (airGuide) => {
	const result = await query("UPDATE air_guides SET ? WHERE id=?", [airGuide, airGuide?.id]);
	return result;
};

export const db_deleteAirGuide = async (id) => {
	const result = await query("DELETE FROM air_guides WHERE id=?", [id]);
	if (result.affectedRows === 0) throw new Error("Air Guide not found " + id);
	return result;
};

export const db_updateAirGuideCurrentWeight = async (id, currentWeight) => {
	const result = await query("UPDATE air_guides SET current_weight=? WHERE id=?", [
		currentWeight,
		id,
	]);
	return result;
};

export const db_getCurrentAirGuide = async () => {
	const result = await query("SELECT  * FROM air_guides WHERE is_active=1 LIMIT 1");
	return result;
};
