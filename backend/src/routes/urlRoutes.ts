import { Router } from "express";
import { geturl, geturls, createurl, updateurl, deleteurl, visitcount, redirecttourl } from "../controllers/urlControllers";

const router = Router();

router.get("/", geturl);
router.get("/all", geturls); // ✅ Fixed duplicate routes
router.post("/", createurl);
router.put("/:id", updateurl);
router.delete("/:id", deleteurl);
router.get("/visitcount/:shortURL", visitcount);
router.get("/:shortURL", redirecttourl);

export default router;
