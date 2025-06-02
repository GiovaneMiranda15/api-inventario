import { Router } from "express";
import inventarioController from "../controllers/inventarioController.js";

const router = Router();

router.post('/', inventarioController.create);
router.put('/:id', inventarioController.update);
router.patch('/:id/activate', inventarioController.activate);
router.get('/', inventarioController.findAll);              
router.get('/:id', inventarioController.findById);

export default router;