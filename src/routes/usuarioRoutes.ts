import { Router } from "express";
import usuarioController from "../controllers/usuarioController";
import { validate } from "../validators/validate";
import { usuarioSchema } from "../validators/usuarioValidator";

const router = Router();

// Rota para criar uma nova usuario
router.post("/", validate(usuarioSchema), usuarioController.create);
// Rota para buscar todas as usuarios
router.get("/", usuarioController.findAll);
// Rota para buscar uma usuario por ID
router.get("/:id", usuarioController.findById);
// Rota para atualizar uma usuario por ID
router.put("/:id", validate(usuarioSchema), usuarioController.update);
// Rota para deletar uma usuario por ID
router.delete("/:id", usuarioController.delete);

export default router;
