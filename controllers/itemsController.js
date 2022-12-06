import { db_getCustomersById } from "../database/dbCustomers.js";
import { db_getItems, db_getItemById, db_findItems } from "../database/dbItems.js";
import { db_getRecieverById } from "../database/dbRecievers.js";

export const getItems = async (req, res) => {
	try {
		const rows = await db_getItems();
		res.status(200).json({
			count: rows.length,
			data: rows,
		});
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getItemById = async (req, res) => {
	const { id } = req.params;
	try {
		const [rows] = await db_getItemById(id);

		if (rows) {
			rows.Customer = await db_getCustomersById(rows.CustomerId);
			rows.Reciever = await db_getRecieverById(rows.RecieverId);
			res.status(200).json({ data: rows });
		} else {
			res.status(400).json({ data: `Item ${id} No Found` });
		}
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const findItems = async (req, res) => {
	const items = req.body;
	let HBL = items.map((item) => item.HBL);
	console.log(HBL, "BODY REQUEST");
	try {
		const rows = await db_findItems(HBL);
		console.log(rows, "ROWS");
		if (rows) {
			res.status(200).json({ data: rows });
		}
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
