import express from "express";

import { getPalletAndProductsByPalletId, getPallets} from "../controllers/palletsController.js";

const router = express.Router();

router.get("/", getPallets);
router.get("/:id", getPalletAndProductsByPalletId);
//router.post("/:id", createProduct);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
