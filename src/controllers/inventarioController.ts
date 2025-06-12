import { ProdutoService } from "../services/produtoService";

export class ProdutoController {
  constructor(private service: ProdutoService) {}  
}

const produtoController = new ProdutoController(new ProdutoService());
export default produtoController;