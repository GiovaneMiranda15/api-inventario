import { setor } from "@prisma/client";
import { BaseService } from "./baseService";

export class SetorService extends BaseService<setor> {
  constructor() {
    super("setor");
  }  
}