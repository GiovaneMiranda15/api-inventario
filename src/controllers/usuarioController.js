import usuarioService from '../services/usuarioService.js';
import usuarioValidator from '../validators/usuarioValidator.js';

async function create(req, res) {
    try {
        const dados = req.body;
        const errors = usuarioValidator.validate(dados);

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const usuario = await usuarioService.create(dados);
        return res.status(201).json(usuario);
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
async function update(req, res) {
    try {
        const { id } = req.params;
        const dados = req.body;
        const errors = usuarioValidator.validate(dados);

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const usuario = await usuarioService.update(id, dados);
        if (!usuario) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function activate(req, res) {
    try {
        const { id } = req.params;
        const usuario = await usuarioService.activate(id);
        if (!usuario) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        console.error('Error activating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function findAll(req, res) {
    try {
        const usuarios = await usuarioService.findAll(req.query);
        return res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function findById(req, res) {
    try {
        const { id } = req.params;
        const usuario = await usuarioService.findById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
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