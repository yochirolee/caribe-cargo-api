import { query } from "../services/db.js";

export const db_getInvoices = async () => {
	return await query(
		"select servicio,agencia,cod_factura,fecha,cliente,destinatario,tipo_orden,subtotal,seguro,cargo_extra,descuento,tarjeta_credito,total,pagado,saldo FROM orden_envio LIMIT 50",
	);
};

export const db_getInvoiceById = async (id) => {
	return await query("SELECT * FROM orden_envio WHERE cod_factura=?", [id]);
};
