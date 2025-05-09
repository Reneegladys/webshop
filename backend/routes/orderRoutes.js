import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";

const router = express.Router();

router.post("/orders", createOrder);
router.get("/orders/:userId", getOrders);

export default router;
