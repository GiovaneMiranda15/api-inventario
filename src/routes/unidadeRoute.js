import { Router } from "express";
import unidadeController from "../controllers/unidadeController.js";

const router = Router();

router.post('/', unidadeController.create);
router.put('/:id', unidadeController.update);
router.patch('/:id/activate', unidadeController.activate);
router.get('/', unidadeController.findAll);              
router.get('/:id', unidadeController.findById);

export default router;