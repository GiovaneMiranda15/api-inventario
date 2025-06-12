import { categoria } from "@prisma/client";
import { BaseService } from "./baseService";

export class CategoriaService extends BaseService<categoria> {
  constructor() {
    super("categoria");
  }  
}