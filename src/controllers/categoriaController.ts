import { Request, Response } from "express";
import { categoria } from "@prisma/client";
import { CategoriaService } from "../services/categoriaService";
import { CategoriaValidator } from "../validators/categoriaValidator";
import { BaseController } from "./baseController";

export class CategoriaController extends BaseController<categoria, CategoriaValidator> {
  constructor(private categoriaService: CategoriaService) {
    super(categoriaService);
  }
};

const categoriaController = new CategoriaController(new CategoriaService());
export default categoriaController;