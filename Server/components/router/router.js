import { getUser,signup,login,updateUser,deleteUser, showUser,addNotes, getNotes } from "../controller/Controller.js";
import express from "express";

const router = express.Router()

router.get("/user",getUser)
router.post("/signup",signup)
router.post("/login",login)
router.post("/updateU",updateUser)
router.post("/deleteU",deleteUser)
router.get("/showU",showUser)
router.post("/addNotes",addNotes)
router.get("/getNotes",getNotes)

export default router