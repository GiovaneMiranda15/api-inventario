import { Router } from "express";
import unidadeController from "../controllers/unidadeController";
import { validate } from "../validators/validate";
import { unidadeSchema } from "../validators/unidadeValidator";

const router = Router();

// Rota para criar uma nova unidade
router.post("/", validate(unidadeSchema), unidadeController.create);
// Rota para buscar todas as unidades
router.get("/", unidadeController.findAll);
// Rota para buscar uma unidade por ID
router.get("/:id", unidadeController.findById);
// Rota para atualizar uma unidade por ID
router.put("/:id", validate(unidadeSchema), unidadeController.update);
// Rota para deletar uma unidade por ID
router.delete("/:id", unidadeController.delete);

export default router;
