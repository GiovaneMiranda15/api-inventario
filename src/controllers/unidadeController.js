import unidadeService from '../services/unidadeService.js';
import unidadeValidator from '../validators/unidadeValidator.js';

async function create(req, res) {
    try {
        const { descricao } = req.body;
        const errors = unidadeValidator.validate({ descricao });

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const unidade = await unidadeService.create({ descricao });
        return res.status(201).json(unidade);
    } catch (error) {
        console.error('Error creating unidade:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function update(req, res) {
    try {
        const { id } = req.params;
        const { descricao } = req.body;
        const errors = unidadeValidator.validate({ descricao });

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const unidade = await unidadeService.update(id, { descricao });
        if (!unidade) {
            return res.status(404).json({ message: 'unidade not found' });
        }

        return res.status(200).json(unidade);
    } catch (error) {
        console.error('Error updating unidade:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function activate(req, res) {
    try {
        const { id } = req.params;
        const unidade = await unidadeService.activate(id);
        if (!unidade) {
            return res.status(404).json({ message: 'unidade not found' });
        }

        return res.status(200).json(unidade);
    } catch (error) {
        console.error('Error activating unidade:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function findAll(req, res) {
    try {
        const unidades = await unidadeService.findAll(req.query);
        return res.status(200).json(unidades);
    } catch (error) {
        console.error('Error fetching unidades:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function findById(req, res) {
    try {
        const { id } = req.params;
        const unidade = await unidadeService.findById(id);
        if (!unidade) {
            return res.status(404).json({ message: 'unidade not found' });
        }

        return res.status(200).json(unidade);
    } catch (error) {
        console.error('Error fetching unidade by ID:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
export default {
    create,
    update,
    activate,
    findAll,
    findById
};