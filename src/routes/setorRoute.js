import { Router } from "express";
import setorController from "../controllers/setorController.js";

const router = Router();

router.post('/', setorController.create);
router.put('/:id', setorController.update);
router.patch('/:id/activate', setorController.activate);
router.get('/', setorController.findAll);              
router.get('/:id', setorController.findById);

export default router;