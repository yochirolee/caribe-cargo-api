import { query } from "../services/db.js";

export const db_getProducts = async () => {
	return await query(
		"SELECT codigo_paquete as HBL,orden_envio.cod_envio as InvoiceId, descripcion as Description,orden_envio.cliente as CustomerId,orden_envio.destinatario as RecieverId , estado as Location,num_contenedor as ContainerNumber, pallet as Pallet, agencias.nombre as Agency FROM orden_envio_emp_det INNER JOIN orden_envio ON orden_envio_emp_det.cod_envio=orden_envio.cod_envio INNER JOIN agencias ON orden_envio_emp_det.agencia=agencias.id  LIMIT 50",
	);
};

export const db_getProductById = async (id) => {
	return await query(
		"SELECT codigo_paquete as HBL,orden_envio.cod_envio as InvoiceId, descripcion as Description,orden_envio.fecha as InvoiceDate, orden_envio.cliente as CustomerId,orden_envio.destinatario as RecieverId , estado as Location,num_contenedor as ContainerNumber, pallet as Pallet, agencias.nombre as Agency,peso as Weight FROM orden_envio_emp_det INNER JOIN orden_envio ON orden_envio_emp_det.cod_envio=orden_envio.cod_envio INNER JOIN agencias ON orden_envio_emp_det.agencia=agencias.id WHERE codigo_paquete=?",
		[id],
	);
};

export const db_findProducts = async (ListHBL) => {
	console.log(ListHBL, "listado hbls");
	const parseHblList = ListHBL?.map((hbl) => "'" + hbl.HBL + "'");

	return await query("SELECT * from tracking where HBL IN (" + parseHblList + ")");
};

export const db_getAllInvoicesByInvoicesList = async (invoicesList) => {
	const parseInvoicesList = invoicesList?.map((invoice) => "'" + invoice.InvoiceId + "'");
	console.log(parseInvoicesList, "parseInvoicesList");
	return await query("SELECT * FROM tracking WHERE InvoiceId IN (" + parseInvoicesList + ")");
};

export const db_getProductsByContainerId = async (ContainerId) => {
	return await query("SELECT * FROM tracking WHERE ContainerId=?", [ContainerId]);
};

export const db_getInvoicesByContainerId = async (ContainerId) => {
	return await query(
		"SELECT InvoiceId,InvoiceDate,AgencyId,AgencyName FROM tracking WHERE ContainerId=?",
		[ContainerId],
	);
};
