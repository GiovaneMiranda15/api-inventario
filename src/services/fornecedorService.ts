import { fornecedor } from "@prisma/client";
import { BaseService } from "./baseService";

export class FornecedorService extends BaseService<fornecedor> {
  constructor() {
    super("fornecedor");
  }  
}