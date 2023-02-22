import { query } from "../services/db.js";

export const db_getContainers = async () => {
	return await query(
		"SELECT codigo as ContainerId, fecha as StartLoadingDate, fecha_salida  as EndLoadingDate, master as Master, paquetes as ProductsQuantity,peso as Weight, sello as SealedNumber, estado as State,numero as ContainerNumber FROM contenedores ORDER BY  codigo Desc",
	);
};

export const db_getContainerByState = async (containerState) => {
	return await query(
		"SELECT codigo as ContainerId, fecha as StartLoadingDate, fecha_salida  as EndLoadingDate, master as Master, paquetes as ProductsQuantity,peso as Weight, sello as SealedNumber, estado as State,numero as ContainerNumber  from contenedores where estado=?",
		[containerState],
	);
};

export const db_getStopsByRecieversInContainerGroupByCities = async (ContainerId) => {
	return await query(
		"select count(distinct RecieverId) as StopsCount,count( distinct InvoiceId) as InvoicesCount, count(HBL) as HBLCount, StateId,CityId, ciudades.ciudad as Provincia, ciudades_cuba.ciudad as Municipio from tracking inner join ciudades on ciudades.id=StateId inner join ciudades_cuba on ciudades_cuba.codigo=CityId where ContainerId=? group by StateId,CityId ",
		[ContainerId],
	);
};

export const db_getContainerById = async (id) => {
	const result = await query(
		"SELECT codigo as ContainerId, fecha as StartLoadingDate, fecha_salida  as EndLoadingDate, master as Master, paquetes as ProductsQuantity,peso as Weight, sello as SealedNumber, estado as State,numero as ContainerNumber  FROM contenedores WHERE codigo=? ",
		[id],
	);

	return result;
};

export const db_getIncomeByContainerId = async (id) => {
	const result = await query(
		"SELECT orden_envio_emp_det.agencia as AgencyId, orden_envio_emp_det.cod_envio as InvoiceId, orden_envio_emp_det.codigo_paquete as HBL, tipo_producto as ProductType, peso as Weight, descripcion as Description, costo_agencia as AgencyPayment, delivery as DeliveryCost FROM orden_envio_emp_det inner join orden_envio on orden_envio.cod_envio=orden_envio_emp_det.cod_envio where contenedor=?  ",
		[id],
	);

	return result;
};
