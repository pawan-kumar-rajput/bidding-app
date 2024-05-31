import { Router } from "express";
import { getNotifications, markRead } from "../controllers/notificationController.js";
import auth from "../middlewares/auth.js";

const router = Router();
router.get("/", auth, getNotifications);
router.post("/mark-read", auth, markRead);

export default router;
