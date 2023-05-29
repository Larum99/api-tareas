import { Router } from "express";
const router = Router();
import * as userCtrl from "../controllers/user.controller";
import { verifyToken, validationSignUp} from "../middlewares";

router.post('/', [
    verifyToken.verifyToken,
    /* verifyToken.isModerator, */
    verifyToken.isAdministrator,
    validationSignUp.checkRolesExisted
],userCtrl.createUser)

export default router;