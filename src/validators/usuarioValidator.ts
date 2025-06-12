import { z } from "zod";

export const usuarioSchema = z.object({
  nome: z.string().min(1, 'O campo "nome" é obrigatório'),
  unidadeId: z.string().min(1, 'O campo unidade_id é obrigatório')
});

export type UsuarioValidator = z.infer<typeof usuarioSchema>;