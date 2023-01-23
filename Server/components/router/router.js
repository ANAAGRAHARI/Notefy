import { getUser,signup,login,updateUser,deleteUser, showUser,addNotes, getNotes, updateNotes,deleteNotes } from "../controller/Controller.js";
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
router.post("/updateNote",updateNotes)
router.post("/deleteNote",deleteNotes)
export default router