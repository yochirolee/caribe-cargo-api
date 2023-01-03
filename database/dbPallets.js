import { query } from "../services/db.js";

export const db_getPallets = async () => {
	return await query(
		"SELECT codigo AS PalletId,fecha AS CreatedAt,cantidad AS PalletCount,paquetes AS ProductsInPallet FROM pallets ORDER BY codigo DESC",
	);
};

export const db_getPalletById = async (id) => {
	return await query(
		"SELECT codigo AS PalletId,fecha AS CreatedAt,cantidad AS PalletCount,paquetes AS ProductsInPallet,peso as PalletWeight FROM pallets WHERE codigo=?",
		[id],
	);
};
export const db_getProductsbyPalletId = async (palletId) => {
	return await query(
		"SELECT p.codigo AS PalletId,lp.descripcion as ProductDescription, lp.cod_envio AS InvoiceId, lp.codigo_paquete AS HBL, lp.peso as ProductWeight  FROM pallets AS p LEFT JOIN orden_envio_emp_det AS lp ON p.codigo = lp.pallet WHERE p.codigo=?",
		[palletId],
	);
};

export const db_getInvoicesByPalletId = async (palletId) => {
	return await query("select cod_envio as InvoiceId FROM orden_envio_emp_det WHERE pallet = ? ", [
		palletId,
	]);
};
