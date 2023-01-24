import mysql from "mysql2/promise";
import { config } from "../config/config.js";

export const query = async (sql, params = []) => {
	const connection = await mysql.createConnection(config);
	try {
		const [rows] = await connection.execute(sql, params);
		await connection.destroy();
		return rows;
	} catch (error) {
		console.log(error);
		return error;
	}
};
