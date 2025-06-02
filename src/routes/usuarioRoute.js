import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = Router();

router.post('/', usuarioController.create);
router.put('/:id', usuarioController.update);
router.patch('/:id/activate', usuarioController.activate);
router.get('/', usuarioController.findAll);              
router.get('/:id', usuarioController.findById);

export default router;