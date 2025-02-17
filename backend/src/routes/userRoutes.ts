import { Router } from "express";
import {getuser,createuser,deleteuser,updateuser} from "../controllers/userControllers";

const router=Router()

router.get("/:id",getuser);
router.post("/",createuser);
router.put("/:id",updateuser);
router.delete("/:id",deleteuser);

export default router;