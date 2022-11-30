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
