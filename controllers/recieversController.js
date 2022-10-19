import {
	db_getRecievers,
	db_getRecieverById,
	db_getRecieverByMobile,
} from "../database/dbRecievers.js";

export const getRecievers = async (req, res) => {
	try {
		const rows = await db_getRecievers();
		res.status(200).json({
			count: rows.length,
			data: rows,
		});
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getRecieverById = async (req, res) => {
	const { id } = req.params;
	try {
		const rows = await db_getRecieverById(id);
		res.status(200).json({ data: rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getRecieverByMobile = async (req, res) => {
	const { mobile } = req.params;
	try {
		const rows = await db_getRecieverByMobile(mobile);
		res.status(200).json({ data: rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
