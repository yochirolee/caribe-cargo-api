import { query } from "../services/db.js";

export const db_getItems = async () => {
	return await query(
		"SELECT codigo_paquete,descripcion,destinatario, estado,cod_envio,num_contenedor FROM orden_envio_emp_det LIMIT 50",
	);
};

export const db_getItemById = async (id) => {
	return await query(
		"SELECT codigo_paquete,descripcion,destinatario, estado,cod_envio,num_contenedor  FROM orden_envio_emp_det WHERE codigo_paquete=?",
		[id],
	);
};


export const db_findItems = async (items) => {
	const parseItems = items.map((item) => "'" + item + "'");

	return await query(
		"SELECT codigo_paquete as HBL,descripcion as Description,destinatario as RecieverId, estado as Location,cod_envio as InvoiceId,num_contenedor as Container FROM orden_envio_emp_det WHERE codigo_paquete IN (" +
			parseItems +
			")",
	);
};
