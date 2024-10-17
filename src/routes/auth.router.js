import { Router } from "express";
import {signinValidation,signupValidation} from '../middleware/auth.validation.js'
import {signIn, signUp} from "../controller/auth.controller.js"
const router = Router();


router.post('/signup',signupValidation,signUp);
router.post('/signin',signinValidation,signIn)

export default router;