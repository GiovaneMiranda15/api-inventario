import { Router } from "express";
import produtoController from "../controllers/produtoController";
import { validate } from "../validators/validate";
import { produtoSchema } from "../validators/produtoValidator";

const router = Router();

// Rota para criar uma nova produto
router.post("/", validate(produtoSchema), produtoController.create);
// Rota para buscar todas as produtos
router.get("/", produtoController.findAll);
// Rota para buscar uma produto por ID
router.get("/:id", produtoController.findById);
// Rota para atualizar uma produto por ID
router.put("/:id", validate(produtoSchema), produtoController.update);
// Rota para deletar uma produto por ID
router.delete("/:id", produtoController.delete);

export default router;
