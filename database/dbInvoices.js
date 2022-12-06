import { query } from "../services/db.js";

export const db_getInvoices = async () => {
	return await query(
		"SELECT clientes.nombre AS CustomerName,codigo_paquete,orden_envio_emp_det.descripcion, orden_envio.destinatario, orden_envio.cod_envio as InvoiceId FROM `orden_envio` INNER JOIN orden_envio_emp_det ON orden_envio.cod_envio=orden_envio_emp_det.cod_envio INNER JOIN clientes ON orden_envio.cliente=clientes.codigo Limit 50 ",
	);
};

export const db_getInvoiceById = async (InvoiceId) => {
	return await query(
		"SELECT cod_envio as InvoiceId,cliente as CustomerId,destinatario as RecieverId FROM `orden_envio` where cod_envio=?",
		[InvoiceId],
	);
};
export const db_getItemsInvoiceById = async (InvoiceId) => {
	return await query(
		"SELECT codigo_paquete as HBL, usuario as Agency, descripcion as Description, num_contenedor as Container, contenedor as ContainerId FROM `orden_envio_emp_det` where cod_envio=?",
		[InvoiceId],
	);
};
