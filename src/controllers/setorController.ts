import { Request, Response } from "express";
import { setor } from "@prisma/client";
import { SetorService } from "../services/setorService";
import { SetorValidator } from "../validators/setorValidator";
import { BaseController } from "./baseController";

export class SetorController extends BaseController<setor, SetorValidator> {
  constructor(private setorService: SetorService) {
    super(setorService);
  }
};

const setorController = new SetorController(new SetorService());
export default setorController;