import { query } from "../services/db.js";

export const db_getHBL = async (id) => {
    return await query("SELECT * FROM tracking WHERE HBL=?", [id]);
};