var db = require("mysql2-promise")();
db.configure({
	host: "localhost",
	user: "root",
	password: "",
	database: "system_cte",
});
module.exports = db;
