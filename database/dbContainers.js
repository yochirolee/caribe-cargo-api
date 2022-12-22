import { query } from "../services/db.js";

export const db_getContainers = async () => {
	return await query("SELECT codigo as ContainerId, fecha as StartLoadingDate, fecha_salida  as EndLoadingDate, master as Master, paquetes as ProductsQuantity,peso as Weight, sello as SealedNumber, estado as State FROM contenedores ORDER BY  codigo Desc");
};

export const db_getContainerByState = async (containerState) => {
	return await query("SELECT codigo as ContainerId, fecha as StartLoadingDate, fecha_salida  as EndLoadingDate, master as Master, paquetes as ProductsQuantity,peso as Weight, sello as SealedNumber, estado as State  from contenedores where estado=?", [containerState]);
};

export const db_getContainerById = async (id) => {
	const result = await query(
		"SELECT codigo as ContainerId, fecha as StartLoadingDate, fecha_salida  as EndLoadingDate, master as Master, paquetes as ProductsQuantity,peso as Weight, sello as SealedNumber, estado as State  FROM contenedores WHERE codigo=? ",
		[id],
	);

	return result;
};
