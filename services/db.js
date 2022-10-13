import mysql from "mysql2/promise";
import { config } from "../config/config.js";

const connection = await mysql.createConnection(config);

export const query = async (sql, params = []) => {
	try {
		await connection.connect();
		const [rows] = await connection.execute(sql, params);

		return rows;
	} catch (error) {
		console.log(error);
		await connection.destroy();
		return error;
	}
};
