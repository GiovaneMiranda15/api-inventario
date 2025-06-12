import { Role } from "@prisma/client"

export interface UsuarioInterface {
    id?: string
    nome: String
    senha: String
    cpf: String
    setorId: String
    permissao: Role
}