import { PrismaClient, TipoMovimentacao, Situacao } from "@prisma/client";

const prisma = new PrismaClient();

export class InventarioService {
  constructor() {}

  // Cria novo inventário e registra movimentação
  async create({ produtoId, unidadeId, setorId, responsavel, quantidade, situacao, fornecedorId, usuarioId, createdBy }: any) {
    const estoque = await prisma.estoque.upsert({
      where: {
        produtoId_setorId_unidadeId: { produtoId, setorId, unidadeId },
      },
      update: {
        quantidade: { increment: quantidade },
        updatedBy: createdBy,
      },
      create: {
        produtoId,
        setorId,
        unidadeId,
        quantidade,
        createdBy,
      },
    });

    const inventario = await prisma.inventario.create({
      data: {
        estoqueId: estoque.id,
        produtoId,
        responsavel,
        situacao,
        fornecedorId,
        createdBy,
      },
    });

    await prisma.movimentacao.create({
      data: {
        estoqueId: estoque.id,
        usuarioId,
        tipo: TipoMovimentacao.ENTRADA,
        quantidade,
        observacao: "Entrada via criação de inventário",
      },
    });

    return inventario;
  }

  // Atualiza inventário (ex: situação ou responsável) e registra movimentação se necessário
  async update({ inventarioId, dados, quantidade, usuarioId, updatedBy }:any) {
    const inventario = await prisma.inventario.findUnique({ where: { id: inventarioId } });
    if (!inventario) throw new Error("Inventário não encontrado.");

    if (quantidade !== undefined) {
      await prisma.estoque.update({
        where: { id: inventario.estoqueId },
        data: {
          quantidade,
          updatedBy,
        },
      });

      await prisma.movimentacao.create({
        data: {
          estoqueId: inventario.estoqueId,
          usuarioId,
          tipo: TipoMovimentacao.ENTRADA, // ou outro tipo, dependendo da lógica
          quantidade,
          observacao: "Ajuste de quantidade no inventário",
        },
      });
    }

    return prisma.inventario.update({
      where: { id: inventarioId },
      data: {
        ...dados,
        updatedBy,
      },
    });
  }

  // Inativa um inventário e registra movimentação
  async delete({ inventarioId, usuarioId, updatedBy }: any) {
    const inventario = await prisma.inventario.findUnique({ where: { id: inventarioId } });
    if (!inventario) throw new Error("Inventário não encontrado.");

    const estoque = await prisma.estoque.findUnique({ where: { id: inventario.estoqueId } });
    if (!estoque) throw new Error("Estoque vinculado não encontrado.");

    await prisma.estoque.update({
      where: { id: estoque.id },
      data: {
        quantidade: { decrement: 1 }, // ou a quantidade real removida
        updatedBy,
      },
    });

    await prisma.inventario.update({
      where: { id: inventarioId },
      data: {
        situacao: Situacao.DESCARTE, // ou outro status de inativação
        updatedBy,
      },
    });

    await prisma.movimentacao.create({
      data: {
        estoqueId: estoque.id,
        usuarioId,
        tipo: TipoMovimentacao.SAIDA,
        quantidade: 1,
        observacao: "Inventário inativado / produto removido",
      },
    });
  }

  // Filtro por unidade, produto, responsável ou setor
  async findAll({ unidadeId, produtoId, responsavel, setorId }: any) {
    return prisma.inventario.findMany({
      where: {
        AND: [
          unidadeId ? { estoque: { unidadeId } } : {},
          produtoId ? { produtoId } : {},
          responsavel ? { responsavel: { contains: responsavel, mode: "insensitive" } } : {},
          setorId ? { estoque: { setorId } } : {},
        ],
      },
      include: {
        estoque: true,
        produto: true,
        fornecedor: true,
      },
    });
  }

  async findProdutos({ produtoId }: any) {
    return prisma.inventario.findMany({
      where: {
        produtoId,
      },
      include: {
        estoque: true,
        produto: true,
      },
    });
  }

  async findById({ id }: any) {
    return prisma.inventario.findUnique({
      where: { id },
      include: {
        estoque: true,
        produto: true,
        fornecedor: true,
      },
    });
  }
}
