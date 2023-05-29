import { Router } from "express";

const router = Router();

import * as authcontroller from '../controllers/auth.controller'

router.post('/signup', authcontroller.signup);
router.post('/signin', authcontroller.signin);

export default router;