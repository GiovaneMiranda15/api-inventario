import { unidade } from "@prisma/client";
import { BaseService } from "./baseService";

export class UnidadeService extends BaseService<unidade> {
  constructor() {
    super("unidade");
  }
}