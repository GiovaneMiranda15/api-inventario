import { z } from "zod";

export const categoriaSchema = z.object({
  nome: z.string().min(1, 'O campo "nome" é obrigatório')
});

export type CategoriaValidator = z.infer<typeof categoriaSchema>;