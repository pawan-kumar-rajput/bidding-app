import { Router } from "express";
import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/upload.js";
import authRoles from '../middlewares/authRoles.js'
const router = Router();

router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", authRoles(['admin']),auth,upload.single('image'),createItem);
router.put("/:id",authRoles(['admin']),auth, updateItem);
router.delete("/:id",authRoles(['admin']),auth, deleteItem);

export default router;
