import inventarioService from '../services/inventarioService.js';
import inventarioValidator from '../validators/inventarioValidator.js';

async function create(req, res) {
    try {
        const { descricao } = req.body;
        const errors = inventarioValidator.validate({ descricao });

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const inventario = await inventarioService.create({ descricao });
        return res.status(201).json(inventario);
    } catch (error) {
        console.error('Error creating inventario:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function update(req, res) {
    try {
        const { id } = req.params;
        const { descricao } = req.body;
        const errors = inventarioValidator.validate({ descricao });

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const inventario = await inventarioService.update(id, { descricao });
        if (!inventario) {
            return res.status(404).json({ message: 'inventario not found' });
        }

        return res.status(200).json(inventario);
    } catch (error) {
        console.error('Error updating inventario:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function activate(req, res) {
    try {
        const { id } = req.params;
        const inventario = await inventarioService.activate(id);
        if (!inventario) {
            return res.status(404).json({ message: 'inventario not found' });
        }

        return res.status(200).json(inventario);
    } catch (error) {
        console.error('Error activating inventario:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function findAll(req, res) {
    try {
        const inventarios = await inventarioService.findAll(req.query);
        return res.status(200).json(inventarios);
    } catch (error) {
        console.error('Error fetching inventarios:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function findById(req, res) {
    try {
        const { id } = req.params;
        const inventario = await inventarioService.findById(id);
        if (!inventario) {
            return res.status(404).json({ message: 'inventario not found' });
        }

        return res.status(200).json(inventario);
    } catch (error) {
        console.error('Error fetching inventario by ID:', error);
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