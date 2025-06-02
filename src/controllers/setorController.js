import setorService from '../services/setorService.js';
import setorValidator from '../validators/setorValidator.js';

async function create(req, res) {
    try {
        const { descricao } = req.body;
        const errors = setorValidator.validate({ descricao });

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const setor = await setorService.create({ descricao });
        return res.status(201).json(setor);
    } catch (error) {
        console.error('Error creating setor:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function update(req, res) {
    try {
        const { id } = req.params;
        const { descricao } = req.body;
        const errors = setorValidator.validate({ descricao });

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const setor = await setorService.update(id, { descricao });
        if (!setor) {
            return res.status(404).json({ message: 'setor not found' });
        }

        return res.status(200).json(setor);
    } catch (error) {
        console.error('Error updating setor:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function activate(req, res) {
    try {
        const { id } = req.params;
        const setor = await setorService.activate(id);
        if (!setor) {
            return res.status(404).json({ message: 'setor not found' });
        }

        return res.status(200).json(setor);
    } catch (error) {
        console.error('Error activating setor:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function findAll(req, res) {
    try {
        const setors = await setorService.findAll(req.query);
        return res.status(200).json(setors);
    } catch (error) {
        console.error('Error fetching setors:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function findById(req, res) {
    try {
        const { id } = req.params;
        const setor = await setorService.findById(id);
        if (!setor) {
            return res.status(404).json({ message: 'setor not found' });
        }

        return res.status(200).json(setor);
    } catch (error) {
        console.error('Error fetching setor by ID:', error);
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