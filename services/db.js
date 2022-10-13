import mysql from "mysql2/promise";
import { config } from "../config/config.js";

const connection = await mysql.createConnection(config);
connection.connect();

export const query = async (sql, params = []) => {
	try {
		const [rows] = await connection.execute(sql, params);

		return rows;
	} catch (error) {
		console.log(error);
		connection.destroy();
		return error;
	}
};
