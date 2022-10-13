import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
	host: "systemcaribetravel.com",
	user: "u373067935_caeenvio_mysgc",
	password: "CaribeAgencia*2022",
	database: "u373067935_cte",
});

export const getProducts = async (req, res) => {
	try {
		const [rows] = await connection.execute("SELECT * FROM online_productos");
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
		const [rows] = await connection.execute("SELECT * FROM online_productos WHERE id=?", [id]);
		res.status(200).json({ rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
