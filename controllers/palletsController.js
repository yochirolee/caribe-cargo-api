import { db_getPalletById, db_getPallets, db_getProductsbyPalletId } from "../database/dbPallets.js";

export const getPallets = async (req, res) => {
	try {
		const rows = await db_getPallets();
		res.status(200).json({
			count: rows.length,
			data: rows,
		});
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getPalletAndProductsByPalletId = async (req, res) => {
	console.log(req.params);
	const { id } = req.params;
	try {
		const [pallet] = await db_getPalletById(id);
		pallet.Products = await db_getProductsbyPalletId(id);

		res.status(200).json({ pallet });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
