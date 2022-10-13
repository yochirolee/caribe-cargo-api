import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
	host: "systemcaribetravel.com",
	user: "u373067935_caeenvio_mysgc",
	password: "CaribeAgencia*2022",
	database: "u373067935_cte",
});
