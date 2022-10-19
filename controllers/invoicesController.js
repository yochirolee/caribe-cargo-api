import { db_getCustomersById } from "../database/dbCustomers.js";
import { db_getInvoiceById, db_getInvoices } from "../database/dbInvoices.js";
import { db_getRecieverById } from "../database/dbRecievers.js";

export const getInvoices = async (req, res) => {
	try {
		const rows = await db_getInvoices();

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
		const [rows] = await db_getInvoiceById(id);

		rows.cliente = await db_getCustomersById(rows.cliente);
		rows.destinatario = await db_getRecieverById(rows.destinatario);

		res.status(200).json({ data: rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
