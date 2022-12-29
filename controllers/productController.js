import { db_getCustomersById } from "../database/dbCustomers.js";
import { db_getProducts, db_getProductById, db_findProducts } from "../database/dbProducts.js";
import { db_getRecieverById } from "../database/dbRecievers.js";

export const getProducts = async (req, res) => {
	try {
		res.status(200).json(await db_getProducts());
	} catch (err) {
		console.log(err);
		return res.status(200).send(err.code);
	}
};

export const getProductById = async (req, res) => {
	const { id } = req.params;
	try {
		const [rows] = await db_getProductById(id);

		if (rows) {
			rows.Customer = await db_getCustomersById(rows.CustomerId);
			rows.Reciever = await db_getRecieverById(rows.RecieverId);
			res.status(200).json({ data: rows });
		} else {
			res.status(200).json({ data: `Product ${id} No Found` });
		}
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const findProducts = async (req, res) => {
	const Products = req.body;
	let HBL = Products.map((Product) => Product.HBL);
	console.log(HBL, "BODY REQUEST");
	try {
		const rows = await db_findProducts(HBL);
		console.log(rows, "ROWS");
		if (rows) {
			res.status(200).json({ data: rows });
		}
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
