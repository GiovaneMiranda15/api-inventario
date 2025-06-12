import { Request, Response } from "express";
import { produto } from "@prisma/client";
import { ProdutoService } from "../services/produtoService";
import { ProdutoValidator } from "../validators/produtoValidator";
import { BaseController } from "./baseController";

export class ProdutoController extends BaseController<produto, ProdutoValidator> {
  constructor(private produtoService: ProdutoService) {
    super(produtoService);
  }
};

const produtoController = new ProdutoController(new ProdutoService());
export default produtoController;