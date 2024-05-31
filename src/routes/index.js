import authRoutes from "./authRoutes.js";
import itemRoutes from "./itemRoutes.js";
import bidRoutes from "./bidRoutes.js";
import notificationRoutes from "./notificationRoutes.js";
import { Router } from "express";

const router=Router();
router.use("/users", authRoutes);
router.use("/items", itemRoutes);
router.use("/bids", bidRoutes);
router.use("/notifications", notificationRoutes);

export default router;