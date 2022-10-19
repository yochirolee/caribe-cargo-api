import { db_getCustomers, db_getCustomersByMobile } from "../database/dbCustomers.js";

export const getCustomers = async (req, res) => {
	try {
		const rows = await db_getCustomers();
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
		const rows = await db_getCustomersByMobile(mobile);
		res.status(200).json({ data: rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
