import { query } from "../services/db.js";

export const db_getCustomers = async () => {
	return await query("SELECT * FROM clientes LIMIT 50");
};

export const db_getCustomersById = async (id) => {
	const [result] = await query("SELECT * FROM clientes WHERE codigo=?", [id]);
	const customer = {};

	customer.Name = result.nombre + " " + result.nombre2;
	customer.LastName = result.apellido + " " + result.apellido2;
	customer.Mobile = result.cel;
	customer.Phone = result.tel;
	customer.License = result.documento;
	customer.Passport = result.pasaporte;

	return customer;
};

export const db_getCustomersByMobile = async (mobile) => {
	return await query(
		"SELECT clientes.nombre as customer_name, destinatarios.nombre FROM clientes INNER JOIN destinatarios ON clientes.codigo=destinatarios.codigo LIMIT 50   ",
		[mobile],
	);
};
