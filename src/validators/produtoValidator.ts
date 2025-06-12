import { z } from "zod";

export const produtoSchema = z.object({
  nome: z.string().min(1, 'O campo "nome" é obrigatório'),
  categoriaId: z.string().min(1, 'O campo "categoria" é obrigatório')
});

export type ProdutoValidator = z.infer<typeof produtoSchema>;