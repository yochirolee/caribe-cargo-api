import { db_getContainerById } from "../database/dbContainers.js";
import { db_getInvoicesByContainerId } from "../database/dbInvoices.js";
import { db_getRecieverById } from "../database/dbRecievers.js";
import { db_getHBL } from "../database/dbTracking.js";

export const getTrackingByHBL = async (req, res) => {
	console.log(req.params);
	const { id } = req.params;
	try {
		const rows = await db_getHBL(id);
		res.status(200).json(rows);
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getContainerReport = async (req, res) => {
	const { id } = req.params;
	try {
		const rows = await db_getContainerById(id);
		const invoices = await db_getInvoicesByContainerId(id);
		invoices.map(
			async (invoice) => (invoice.Reciever = await db_getRecieverById(invoice.RecieverId)),
		);

		rows.invoices = invoices;

		res.status(200).json({ rows, invoices });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
