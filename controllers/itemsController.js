import { db_getItems, db_getItemById } from "../database/dbItems.js";
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
			rows.destinatario = await db_getRecieverById(rows.destinatario);
			res.status(200).json({ data: rows });
		} else {
			res.status(400).json({ data: `Item ${id} No Found` });
		}
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	} 
};
