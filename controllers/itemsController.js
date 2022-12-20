import {
	db_getItems,
	db_getItemById,
	db_findItems,
	db_getItemsByHBL,
} from "../database/dbItems.js";

export const getItems = async (req, res) => {
	try {
		const rows = await db_getItems();
		res.status(200).json({
			count: rows.length,
			data: rows,
		});
	} catch (err) {
		console.log(err);
		return res.status(200).send(err.code);
	}
};

export const getItemById = async (req, res) => {
	const { id } = req.params;
	console.log(id.length, "ITEMS");
	let rows = [];
	try {
		if (id.length < 5) {
			rows = await db_getItemById(id);
		} else {
			rows = await db_getItemsByHBL(id);
		}

		res.status(200).json({ data: rows });
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
