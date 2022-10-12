const express = require("express");
const app = express();
const product = require("./api/product");
const port = 3000;
app.use(express.json({ extended: false }));
app.use(
	express.urlencoded({
		extended: true,
	}),
);

app.use("/api/product", product);

app.listen(port, () => {
	console.log(`Server is Running on port:${port}`);
});
