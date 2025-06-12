import { Request, Response } from "express";
import { fornecedor } from "@prisma/client";
import { FornecedorService } from "../services/fornecedorService";
import { FornecedorValidator } from "../validators/fornecedorValidator";
import { BaseController } from "./baseController";

export class FornecedorController extends BaseController<fornecedor, FornecedorValidator> {
  constructor(private fornecedorService: FornecedorService) {
    super(fornecedorService);
  }
};

const fornecedorController = new FornecedorController(new FornecedorService());
export default fornecedorController;