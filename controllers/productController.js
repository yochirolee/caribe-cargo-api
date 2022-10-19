import { db_getProductById, db_getProducts } from "../database/dbProducts.js";

export const getProducts = async (req, res) => {
	try {
		const rows = await db_getProducts();
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
		const rows = await db_getProductById(id);
		res.status(200).json({ rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
