
var db = require("mysql2-promise")();

async function query(sql, params) {
	db.configure({
		host: "localhost",
		user: "root",
		password: "",
		database: "system_cte",
	});
	db.query("SELECT * FROM usu").spread(function (users) {
		console.log("Hello users", users);
	});

	return results;
}

module.exports = {
	query,
};
