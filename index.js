import express from "express";
import productRoutes from "./routes/productRoute.js";
import customersRoutes from "./routes/customersRoutes.js";
import invoicesRoutes from "./routes/invoicesRoutes.js";

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

app.use("/api/product", productRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/invoices", invoicesRoutes);

app.listen(port, () => {
	console.log(`Server is Running on port:${port}`);
});
