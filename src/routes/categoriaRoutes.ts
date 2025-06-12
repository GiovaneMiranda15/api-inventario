import { Router } from "express";
import categoriaController from "../controllers/categoriaController";
import { validate } from "../validators/validate";
import { categoriaSchema } from "../validators/categoriaValidator";

const router = Router();

// Rota para criar uma nova categoria
router.post("/", validate(categoriaSchema), categoriaController.create);
// Rota para buscar todas as categorias
router.get("/", categoriaController.findAll);
// Rota para buscar uma categoria por ID
router.get("/:id", categoriaController.findById);
// Rota para atualizar uma categoria por ID
router.put("/:id", validate(categoriaSchema), categoriaController.update);
// Rota para deletar uma categoria por ID
router.delete("/:id", categoriaController.delete);

export default router;
