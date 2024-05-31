import { Router } from "express";
import { getBids, placeBid } from "../controllers/bidController.js";
import auth from "../middlewares/auth.js";
const router = Router();

router.get("/:itemId", getBids);
router.post("/:itemId",auth,placeBid);

export default router;