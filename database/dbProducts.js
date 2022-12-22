import { query } from "../services/db.js";

export const db_getProducts = async () => {
	return await query(
		"SELECT codigo_paquete as HBL,orden_envio.cod_envio as InvoiceId, descripcion as Description,orden_envio.cliente as CustomerId,orden_envio.destinatario as RecieverId , estado as Location,num_contenedor as ContainerNumber, pallet as Pallet, agencias.nombre as Agency FROM orden_envio_emp_det INNER JOIN orden_envio ON orden_envio_emp_det.cod_envio=orden_envio.cod_envio INNER JOIN agencias ON orden_envio_emp_det.agencia=agencias.id  LIMIT 50",
	);
};

export const db_getProductById = async (id) => {
	return await query(
		"SELECT codigo_paquete as HBL,orden_envio.cod_envio as InvoiceId, descripcion as Description,orden_envio.cliente as CustomerId,orden_envio.destinatario as RecieverId , estado as Location,num_contenedor as ContainerNumber, pallet as Pallet, agencias.nombre as Agency FROM orden_envio_emp_det INNER JOIN orden_envio ON orden_envio_emp_det.cod_envio=orden_envio.cod_envio INNER JOIN agencias ON orden_envio_emp_det.agencia=agencias.id WHERE codigo_paquete=?",
		[id],
	);
};

export const db_findProducts = async (products) => {
	const parseProducts = products.map((product) => "'" + product + "'");

	return await query(
		"SELECT codigo_paquete as HBL,descripcion as Description,destinatario as RecieverId, destinatarios.nombre,  destinatarios.apellido, orden_envio_emp_det.estado as Location,cod_envio as InvoiceId,num_contenedor as Container,pallet as Pallet FROM orden_envio_emp_det INNER JOIN destinatarios ON destinatario=destinatarios.codigo, INNER JOIN agencias ON orden_envio_emp_det.agencia=agencias.id WHERE codigo_paquete IN (" +
			parseProducts +
			")",
	);
};

export const db_getProductsByContainerId = async (ContainerId) => {
	return await query(
		"SELECT codigo_paquete as HBL,orden_envio.cod_envio as InvoiceId, descripcion as Description,orden_envio.cliente as CustomerId,orden_envio.destinatario as RecieverId , estado as Location,num_contenedor as ContainerNumber, pallet as Pallet, agencias.nombre as Agency FROM orden_envio_emp_det INNER JOIN orden_envio ON orden_envio_emp_det.cod_envio=orden_envio.cod_envio INNER JOIN agencias ON orden_envio_emp_det.agencia=agencias.id WHERE contenedor=?",[
			ContainerId
		],
	);
};
