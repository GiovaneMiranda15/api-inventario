import { Router } from "express";
import setorController from "../controllers/setorController";
import { validate } from "../validators/validate";
import { setorSchema } from "../validators/setorValidator";

const router = Router();

// Rota para criar uma nova setor
router.post("/", validate(setorSchema), setorController.create);
// Rota para buscar todas as setors
router.get("/", setorController.findAll);
// Rota para buscar uma setor por ID
router.get("/:id", setorController.findById);
// Rota para atualizar uma setor por ID
router.put("/:id", validate(setorSchema), setorController.update);
// Rota para deletar uma setor por ID
router.delete("/:id", setorController.delete);

export default router;
