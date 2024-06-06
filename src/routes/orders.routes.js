import { Router } from "express";
import { createOrder, getOrderById, getOrders, resolveOrder } from "../controllers/orders.controller.js";

const router = Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.get("/:uid", getOrderById);
router.put("/:uid", resolveOrder);

export { router as ordersRouter };
