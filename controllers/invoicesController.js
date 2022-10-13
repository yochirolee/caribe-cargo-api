import { query } from "../services/db.js";

export const getInvoices = async (req, res) => {
	try {
		const rows = await query(
			"select servicio,agencia,cod_factura,fecha,cliente,destinatario,tipo_orden,subtotal,seguro,cargo_extra,descuento,tarjeta_credito,total,pagado,saldo FROM orden_envio LIMIT 50",
		);

		res.status(200).json({
			count: rows.length,
			data: rows,
		});
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getInvoicesById = async (req, res) => {
	const { id } = req.params;
	try {
		const [rows] = await query("SELECT * FROM orden_envio WHERE cod_factura=?", [id]);
		res.status(200).json({ data: rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
