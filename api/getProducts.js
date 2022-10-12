const db = require("../services/db");
const helper = require("../helpers/helper");
const config = require("../config/config");

async function getProducts(page = 1) {
	const offSet = helper.getOffset(pase, config.listPerPage);
	const rows = await db.query("SELECT cod_usu,nombre,foto,agencia,tema,skin FROM usu'");
	console.log(rows, "rowsss");

	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta,
	};
}

module.exports(getProducts);
