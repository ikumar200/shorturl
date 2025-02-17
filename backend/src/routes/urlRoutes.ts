import { Router } from "express";
import {geturl,geturls,createurl,updateurl,deleteurl,visitcount} from "../controllers/urlControllers";

const router=Router();

router.get("/",geturl);
router.get("/",geturls);
router.post("/",createurl);
router.put("/:id",updateurl);
router.delete("/:id",deleteurl);
router.get("/visitcount",visitcount)

export default router;