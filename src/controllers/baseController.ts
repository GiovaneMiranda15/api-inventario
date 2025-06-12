import {Request, Response} from 'express';
import {BaseService} from '../services/baseService';

export class BaseController<T, TInput> {
    constructor(protected service: BaseService<T>) {
        this.service = service;
    }

    findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const records = await this.service.findAll();
            res.json(records);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    findById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const record = await this.service.findById(id);
            if (!record) {
                res.status(404).json({ error: 'Registro não encontrado' });
                return;
            }
            res.json(record);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            const data = req.body;
            const newRecord = await this.service.create(data);
            res.status(201).json(newRecord);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    update = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const data = req.body;
            const updatedRecord = await this.service.update(id, data);
            res.json(updatedRecord);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    delete = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const deleteRecord = await this.service.delete(id);
            res.json(deleteRecord);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}