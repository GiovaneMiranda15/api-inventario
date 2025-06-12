import { produto } from "@prisma/client";
import { BaseService } from "./baseService";

export class ProdutoService extends BaseService<produto> {
  constructor() {
    super("produto");
  }  
}