import express from "express";
import { productsController } from "../controllers/index.js";
const router = express.Router();

router.get("/", productsController.selectProducts);
router.get("/:page", productsController.selectProducts);

export default router;
