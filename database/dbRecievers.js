import { query } from "../services/db.js";

export const db_getRecievers = async () => {
	return await query("SELECT * FROM destinatarios LIMIT 50");
};

export const db_getRecieverById = async (id) => {
	const [result] = await query("SELECT * FROM destinatarios WHERE codigo=?", [id]);
	const [state] = await query("SELECT ciudad as Province FROM ciudades where id=?", [
		result.estado,
	]);
	const [city] = await query("SELECT ciudad as Municipality FROM ciudades_cuba where codigo=?", [
		result.ciudad,
	]);
	const reciever = {};

	reciever.Name = result.nombre + " " + result.nombre2;
	reciever.LastName = result.apellido + " " + result.apellido2;
	reciever.Mobile = result.cel;
	reciever.Phone = result.tel;
	reciever.CI = result.documento;
	reciever.Passport = result.pasaporte;
	reciever.Address =
		result.cll +
		" " +
		result.entre_cll +
		" " +
		"No: " +
		result.no +
		" " +
		result.apto +
		" " +
		result.reparto;
	reciever.Province = state.Province;
	reciever.Municipality = city.Municipality;
	console.log(reciever,"Reciever")
	return reciever;
};

export const db_getRecieverByMobile = async (mobile) => {
	return await query("SELECT * FROM destinatarios WHERE cel=?", [mobile]);
};
