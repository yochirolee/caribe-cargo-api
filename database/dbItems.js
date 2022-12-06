import { query } from "../services/db.js";

export const db_getItems = async () => {
	return await query(
		"SELECT codigo_paquete,descripcion,destinatario, estado,cod_envio,num_contenedor FROM orden_envio_emp_det LIMIT 50",
	);
};

export const db_getItemById = async (id) => {
	return await query(
		"SELECT codigo_paquete as HBL,orden_envio.cod_envio as InvoiceId, descripcion as Description,orden_envio.cliente as CustomerId,orden_envio.destinatario as RecieverId , estado,num_contenedor as ContainerNumber FROM orden_envio_emp_det INNER JOIN orden_envio ON orden_envio_emp_det.cod_envio=orden_envio.cod_envio WHERE codigo_paquete=?",
		[id],
	);
};

export const db_findItems = async (items) => {
	const parseItems = items.map((item) => "'" + item + "'");

	return await query(
		"SELECT codigo_paquete as HBL,descripcion as Description,destinatario as RecieverId, destinatarios.nombre,  destinatarios.apellido, orden_envio_emp_det.estado as Location,cod_envio as InvoiceId,num_contenedor as Container FROM orden_envio_emp_det INNER JOIN destinatarios ON destinatario=destinatarios.codigo WHERE codigo_paquete IN (" +
			parseItems +
			")",
	);
};
