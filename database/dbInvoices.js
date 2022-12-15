import { query } from "../services/db.js";

export const db_getInvoices = async () => {
	return await query(
		"SELECT clientes.nombre AS CustomerName,orden_envio_emp_det.descripcion, orden_envio.destinatario, orden_envio.cod_envio as InvoiceId FROM `orden_envio` INNER JOIN orden_envio_emp_det ON orden_envio.cod_envio=orden_envio_emp_det.cod_envio INNER JOIN clientes ON orden_envio.cliente=clientes.codigo Limit 50 ",
	);
};

export const db_getInvoiceById = async (InvoiceId) => {
	return await query(
		"SELECT cod_envio as InvoiceId,cliente as CustomerId,destinatario as RecieverId,agencias.nombre as Agency FROM `orden_envio` INNER JOIN agencias ON agencias.id=orden_envio.agencia where cod_envio=?",
		[InvoiceId],
	);
};
export const db_getItemsInvoiceById = async (InvoiceId) => {
	return await query(
		"SELECT codigo_paquete as HBL,orden_envio.cod_envio as InvoiceId, descripcion as Description,orden_envio.cliente as CustomerId,orden_envio.destinatario as RecieverId , estado as Location,num_contenedor as ContainerNumber, pallet as Pallet, agencias.nombre as Agency FROM orden_envio_emp_det INNER JOIN orden_envio ON orden_envio_emp_det.cod_envio=orden_envio.cod_envio INNER JOIN agencias ON orden_envio_emp_det.agencia=agencias.id WHERE orden_envio.cod_envio=?",
		[InvoiceId],
	);
};
