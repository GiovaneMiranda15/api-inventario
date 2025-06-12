import { z } from "zod";

export const fornecedorSchema = z.object({
  nome: z.string().min(1, 'O campo "nome" é obrigatório'),
  cnpj: z.string().min(1, 'O campo "cnpj" é obrigatório'),
});

export type FornecedorValidator = z.infer<typeof fornecedorSchema>;