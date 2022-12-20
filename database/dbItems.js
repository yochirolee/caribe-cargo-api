import { query } from "../services/db.js";

export const db_getItems = async () => {
	return await query(
		"SELECT codigo_paquete as HBL,orden_envio.cod_envio as InvoiceId, descripcion as Description,orden_envio.cliente as CustomerId,orden_envio.destinatario as RecieverId , estado,num_contenedor as ContainerNumber, pallet as Pallet, agencias.nombre as Agency FROM orden_envio_emp_det INNER JOIN orden_envio ON orden_envio_emp_det.cod_envio=orden_envio.cod_envio INNER JOIN agencias ON orden_envio_emp_det.agencia=agencias.id  LIMIT 50",
	);
};

export const db_getItemById = async (InvoiceId) => {
	console.log(InvoiceId)
	if (InvoiceId.lenght < 6)
		return await query(
			"SELECT cod_envio as Invoice, no_paquete as HBL, descripcion as Description, cod_estado as Location, contenedor as Container,conntenido as OrderType, descripcion as Description,peso as Weight, num_contenedor as ContainerNumber,nom_agencia as Agency, tipo as Type,pallet as Pallet,cod_estado as Location from listado_paquetes  where cod_envio=?  ",
			[InvoiceId],
		);
	else
		return await query(
			"SELECT cod_envio as Invoice, no_paquete as HBL, descripcion as Description, cod_estado as Location, contenedor as Container,conntenido as OrderType, descripcion as Description,peso as Weight, num_contenedor as ContainerNumber,nom_agencia as Agency, tipo as Type,pallet as Pallet,cod_estado as Location from listado_paquetes  where no_paquete=?  ",
			[InvoiceId],
		);
};

export const db_findItems = async (items) => {
	const parseItems = items.map((item) => "'" + item + "'");

	return await query(
		"SELECT codigo_paquete as HBL,descripcion as Description,destinatario as RecieverId, destinatarios.nombre,  destinatarios.apellido, orden_envio_emp_det.estado as Location,cod_envio as InvoiceId,num_contenedor as Container,pallet as Pallet FROM orden_envio_emp_det INNER JOIN destinatarios ON destinatario=destinatarios.codigo, INNER JOIN agencias ON orden_envio_emp_det.agencia=agencias.id WHERE codigo_paquete IN (" +
			parseItems +
			")",
	);
};
