import { Router } from "express";
import fornecedorController from "../controllers/fornecedorController";
import { validate } from "../validators/validate";
import { fornecedorSchema } from "../validators/fornecedorValidator";

const router = Router();

// Rota para criar uma nova fornecedor
router.post("/", validate(fornecedorSchema), fornecedorController.create);
// Rota para buscar todas as fornecedors
router.get("/", fornecedorController.findAll);
// Rota para buscar uma fornecedor por ID
router.get("/:id", fornecedorController.findById);
// Rota para atualizar uma fornecedor por ID
router.put("/:id", validate(fornecedorSchema), fornecedorController.update);
// Rota para deletar uma fornecedor por ID
router.delete("/:id", fornecedorController.delete);

export default router;
