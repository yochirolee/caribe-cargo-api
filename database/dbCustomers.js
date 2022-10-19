import { query } from "../services/db.js";

export const db_getCustomers = async () => {
	return await query("SELECT * FROM clientes LIMIT 50");
};

export const db_getCustomersById = async (id) => {
	return await query("SELECT * FROM clientes WHERE codigo=?", [id]);
};

export const db_getCustomersByMobile = async (mobile) => {
	return await query("SELECT * FROM clientes WHERE cel=?", [mobile]);
};
