import { query } from "../services/db.js";

export const getProducts = async (req, res) => {
	try {
		const rows = await query("SELECT * FROM online_productos");
		res.status(200).json({
			count: rows.length,
			data: rows,
		});
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getProductById = async (req, res) => {
	const { id } = req.params;
	try {
		const rows = await query("SELECT * FROM online_productos WHERE id=?", [id]);
		res.status(200).json({ rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
