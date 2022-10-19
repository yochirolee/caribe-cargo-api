import { query } from "../services/db.js";

export const db_getProducts = async () => {
	return await query("SELECT * FROM online_productos LIMIT 50");
};

export const db_getProductById = async (id) => {
	return await query("SELECT * FROM online_productos WHERE id=?", [id]);
};
