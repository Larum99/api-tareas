import { Router } from "express";
import * as tareasControllers from '../controllers/tareas.controller';
import { verifyToken } from "../middlewares";

const router = Router();

router.get('/', tareasControllers.getTarea);

router.post('/', [verifyToken.verifyToken, verifyToken.isAdministrator], tareasControllers.createTarea);

router.get('/:tareaId', tareasControllers.getTareaById);

router.put('/:tareaId', [verifyToken.verifyToken, verifyToken.isModerator, verifyToken.isAdministrator], tareasControllers.updateTareaById);

router.delete('/:tareaId', [verifyToken.verifyToken, verifyToken.isAdministrator], tareasControllers.deleteTareaById);

export default router;