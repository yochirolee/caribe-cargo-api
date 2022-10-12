/**
 * GET PRODUCT LIST
 *
 * @return product list | empty
 */
var db = require("mysql2-promise")();
db.configure({
	host: "systemcaribetravel.com",
	user: "u373067935_caeenvio_mysgc",
	password: "",
	database: "u373067935_cte",
});

const getProducts = async () => {
	const users = await db.query("SELECT * FROM online_productos").spread(function (users) {
		return users;
	});
	return users;
};

const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
	try {
		res.json(await getProducts());
	} catch (error) {
		console.log(error);
		return res.status(500).send(error.code);
	}
});

module.exports = router;
