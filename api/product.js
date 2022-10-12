const express = require("express");
const router = express.Router();

/**
 * GET PRODUCT LIST
 *
 * @return product list | empty
 */

router.get("/", async (req, res) => {
	try {
		res.json({
			status: 200,
			message: "Get data has successfully",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).send("serverError");
	}
});

module.exports = router;
