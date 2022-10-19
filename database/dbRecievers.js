import { query } from "../services/db.js";

export const db_getRecievers = async () => {
	return await query("SELECT * FROM destinatarios LIMIT 50");
};

export const db_getRecieverById = async (id) => {
	return await query("SELECT * FROM destinatarios WHERE codigo=?", [id]);
};

export const db_getRecieverByMobile = async (mobile) => {
	return await query("SELECT * FROM destinatarios WHERE cel=?", [mobile]);
};
