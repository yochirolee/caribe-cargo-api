import { db_getCustomersById } from "../database/dbCustomers.js";
import {
	db_getInvoiceById,
	db_getInvoices,
	db_getItemsInvoiceById,
} from "../database/dbInvoices.js";
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
		rows.Products = await db_getItemsInvoiceById(id);
		rows.Reciever = await db_getRecieverById(rows.RecieverId);
		if (rows.CustomerId !== 0) {
			rows.Customer = await db_getCustomersById(rows.CustomerId);
		} else {
			rows.Customer = rows.Reciever;
		}
		res.status(200).json(rows);
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
