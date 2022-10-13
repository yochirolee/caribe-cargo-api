import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
	host: "systemcaribetravel.com",
	user: "u373067935_caeenvio_mysgc",
	password: "CaribeAgencia*2022",
	database: "u373067935_cte",
});

export const getInvoices = async (req, res) => {
	try {
		const [rows] = await connection.execute(
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
	console.log(req.params);
	const { id } = req.params;
	try {
		const [rows] = await connection.execute("SELECT * FROM orden_envio WHERE cod_factura=?", [id]);
		res.status(200).json({ data: rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
