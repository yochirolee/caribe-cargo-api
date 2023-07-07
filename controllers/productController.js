import { db_getCustomersById } from "../database/dbCustomers.js";
import {
	db_getProducts,
	db_getProductById,
	db_findProducts,
	db_getAllInvoicesByInvoicesList,
} from "../database/dbProducts.js";
import { db_getRecieverById } from "../database/dbRecievers.js";

export const getProducts = async (req, res) => {
	try {
		res.status(200).json(await db_getProducts());
	} catch (err) {
		console.log(err);
		return res.status(200).send(err.code);
	}
};

export const getProductById = async (req, res) => {
	const { id } = req.params;
	try {
		const [rows] = await db_getProductById(id);
		if (rows) {
			rows.Reciever = await db_getRecieverById(rows.RecieverId);
			if (rows.CustomerId !== 0) {
				rows.Customer = await db_getCustomersById(rows.CustomerId);
			} else {
				rows.Customer = rows.Reciever;
			}
			res.status(200).json(rows);
		} else {
			res.status(200).json(rows);
		}
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const findProducts = async (req, res) => {
	const hbl = req.body;
	console.log(req.body, "RESULT");
	try {
		const rows = await db_findProducts(hbl);
		if (rows) {
			res.status(200).json({ data: rows });
		}
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const findInvoices = async (req, res) => {
	const invoicesList = req.body;

	try {
		const rows = await db_getAllInvoicesByInvoicesList(invoicesList);
		if (rows) {
			res.status(200).send(rows);
		}
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
