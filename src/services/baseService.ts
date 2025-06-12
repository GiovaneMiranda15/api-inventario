import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class BaseService<T> {
    protected model: any;

    constructor(modelName: keyof PrismaClient) {
        this.model = prisma[modelName];
    }

    async findAll(): Promise<T[]> {
        try {
            return await this.model.findMany();
        } catch (error) {
            throw new Error('Erro ao buscar registros: ' + (error as Error).message);
        }
    }

    async findById(id: string): Promise<T | null> {
        try {
            return await this.model.findUnique({ where: { id } });
        } catch (error) {
            throw new Error('Erro ao buscar registro: ' + (error as Error).message);
        }
    }

    async create(data: T): Promise<T> {
        try {
            return await this.model.create({ data });
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao criar registro: ' + (error as Error).message);
        }
    }

    async update(id: string, data: T): Promise<T> {
        try {
            const existingRecord = await this.findById(id);
            if (!existingRecord) {
                throw new Error('Registro não encontrado');
            }
            
            return await this.model.update({
                where: { id },
                data
            });
        } catch (error) {
            throw new Error('Erro ao atualizar registro: ' + (error as Error).message);
        }
    }

    async delete(id: string): Promise<T> {
        try {
            const existingRecord = await this.findById(id);
            if (!existingRecord) {
                throw new Error('Registro não encontrado');
            }
            return await this.model.delete({ where: { id } });
        } catch (error) {
            throw new Error('Erro ao deletar registro: ' + (error as Error).message);
        }
    }
}