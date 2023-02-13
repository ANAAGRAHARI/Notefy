
import express from "express";
import {login} from "../controller/User/Auth/login.js"
import {adduser} from "../controller/User/addUser.js"
import {updateUser} from "../controller/User/updateUser.js"
import {deleteUser} from "../controller/User/deleteUser.js"
import {getUser,getuserbyid} from "../controller/User/getUser.js"
import { updateNotes } from "../controller/Notes/updateNotes.js";
import {addNotes} from "../controller/Notes/addNotes.js"
import {deleteNotes} from "../controller/Notes/deleteNotes.js"
import { getNotes } from "../controller/Notes/getNotes.js";
const router = express.Router()



router.use('/',login);

router.use('/',adduser);
router.use('/',updateUser);
router.use('/',deleteUser);
router.use('/',getUser);
router.use('/',getuserbyid);

router.use('/',addNotes);
router.use('/',getNotes);
router.use('/',updateNotes);
router.use('/',deleteNotes);


export default router