import { Request, Response } from "express";
import { usuario } from "@prisma/client";
import { UsuarioService } from "../services/usuarioService";
import { UsuarioValidator } from "../validators/usuarioValidator";
import { BaseController } from "./baseController";

export class UsuarioController extends BaseController<usuario, UsuarioValidator> {
  constructor(private usuarioService: UsuarioService) {
    super(usuarioService);
  }
};

const usuarioController = new UsuarioController(new UsuarioService());
export default usuarioController;