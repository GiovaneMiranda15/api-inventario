import { z } from "zod";

export const unidadeSchema = z.object({
  nome: z.string().min(1, 'O campo "nome" é obrigatório'),
});

export type UnidadeValidator = z.infer<typeof unidadeSchema>;