import { Request, Response } from "express";
import { unidade } from "@prisma/client";
import { UnidadeService } from "../services/unidadeService";
import { UnidadeValidator } from "../validators/unidadeValidator";
import { BaseController } from "./baseController";

export class UnidadeController extends BaseController<unidade, UnidadeValidator> {
  constructor(private unidadeService: UnidadeService) {
    super(unidadeService);
  }
};

const unidadeController = new UnidadeController(new UnidadeService());
export default unidadeController;