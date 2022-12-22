import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";
import customersRoutes from "./routes/customersRoutes.js";
import invoicesRoutes from "./routes/invoicesRoutes.js";
import recieversRoutes from "./routes/recieversRoutes.js";
import itemsRoutes from "./routes/itemsRoutes.js";
import containersRoutes from "./routes/containersRoutes.js";

const app = express();
const port = 3000;
app.use(express.json({ extended: false }));
app.use(
	express.urlencoded({
		extended: true,
	}),
);
app.get("/", (req, res) => {
	res.json({ message: "ok,server is running" });
});

app.use(
	cors({
		origin: "*",
	}),
);
app.use("/api/products", productRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/invoices", invoicesRoutes);
app.use("/api/recievers", recieversRoutes);
app.use("/api/items", itemsRoutes);
app.use("/api/containers", containersRoutes);

app.listen(port, () => {
	console.log(`Server is Running on port:${port}`);
});
