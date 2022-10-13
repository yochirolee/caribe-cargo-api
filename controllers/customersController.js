import { query } from "../services/db.js";

export const getCustomers = async (req, res) => {
	try {
		const rows = await query("SELECT * FROM clientes LIMIT 50");
		console.log(rows);
		res.status(200).json({
			count: rows.length,
			data: rows,
		});
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getCustomersByMobile = async (req, res) => {
	const { mobile } = req.params;
	try {
		const [rows] = await query("SELECT * FROM clientes WHERE cel=?", [mobile]);
		res.status(200).json({ data: rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
