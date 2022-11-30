import { query } from "../services/db.js";

export const db_getRecievers = async () => {
	return await query("SELECT * FROM destinatarios LIMIT 50");
};

export const db_getRecieverById = async (id) => {
	const [result] = await query("SELECT * FROM destinatarios WHERE codigo=?", [id]);
	const reciever = {};

	reciever.name = result.nombre + " " + result.nombre2;
	reciever.lastName = result.apellido + " " + result.apellido2;
	reciever.mobile = result.cel;
	reciever.phone = result.tel;
	reciever.ci = result.documento;
	reciever.passport = result.pasaporte;

	return reciever;
};

export const db_getRecieverByMobile = async (mobile) => {
	return await query("SELECT * FROM destinatarios WHERE cel=?", [mobile]);
};
