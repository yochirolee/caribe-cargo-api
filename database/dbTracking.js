import { query } from "../services/db.js";

export const db_getHBL = async (id) => {
    const parseHBL= id.map((hbl) => "'" + id + "'");

	return await query("SELECT * FROM tracking WHERE HBL In (" + parseHBL + ")");
};
