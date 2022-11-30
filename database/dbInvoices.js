import { query } from "../services/db.js";

export const db_getInvoices = async () => {
	return await query(
		"SELECT * FROM orden_envio_det inner JOIN destinatarios ON destinatario=destinatarios.codigo  INNER JOIN clientes ON cliente=clientes.codigo Limit 50 "
	);
};

export const db_getInvoiceById = async (id) => {
	return await query("SELECT * FROM orden_envio WHERE codigo=?", [id]);
};
