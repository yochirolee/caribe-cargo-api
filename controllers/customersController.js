import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
	host: "systemcaribetravel.com",
	user: "u373067935_caeenvio_mysgc",
	password: "CaribeAgencia*2022",
	database: "u373067935_cte",
});

export const getCustomers = async (req, res) => {
	connection.connect();
	try {
		const [rows] = await connection.execute("SELECT * FROM clientes LIMIT 50");
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
		const [rows] = await connection.execute("SELECT * FROM clientes WHERE cel=?", [mobile]);
		res.status(200).json({ data: rows });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
