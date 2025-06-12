import { usuario } from "@prisma/client";
import { BaseService } from "./baseService";

export class UsuarioService extends BaseService<usuario> {
  constructor() {
    super("usuario");
  }
}