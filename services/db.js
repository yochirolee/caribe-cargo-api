import mysql from "mysql2/promise";
import { config } from "../config/config.js";

export const query = async (sql, params = []) => {
	const connection = await mysql.createConnection(config);
	try {
		const [rows] = await connection.execute(sql, params);
		return rows;
	} catch (error) {
		console.log(error);
		await connection.destroy();
		return error;
	}
};
