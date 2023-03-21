import {
	db_getContainers,
	db_getContainerById,
	db_getContainerByState,
	db_getStopsByRecieversInContainerGroupByCities,
	db_getReportByContainerId,
} from "../database/dbContainers.js";
import { db_getProductsByContainerId } from "../database/dbProducts.js";

export const getContainers = async (req, res) => {
	try {
		const rows = await db_getContainers();
		res.status(200).json({
			count: rows.length,
			data: rows,
		});
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getContainersByState = async (req, res) => {
	const { state } = req.params;
	try {
		const containers = await db_getContainerByState(state);

		res.status(200).json({ data: containers });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getContainerById = async (req, res) => {
	const { id } = req.params;
	try {
		const [container] = await db_getContainerById(id);
		const products = await db_getProductsByContainerId(container?.ContainerId);

		res.status(200).json({ data: container, products });
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getContainersStopsByRecievers = async (req, res) => {
	const { id } = req.params;
	try {
		const rows = await db_getStopsByRecieversInContainerGroupByCities(id);
		res.status(200).json(rows);
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};

export const getReportByContainerId = async (req, res) => {
	const { id } = req.params;
	try {
		const rows = await db_getReportByContainerId(id);
		res.status(200).json(rows);
	} catch (err) {
		console.log(err);
		return res.status(404).send(err.code);
	}
};
