import permissoes from '../constants/permissao.js';

// Simulação de "banco de dados" em memória
let usuarios = [];
let nextId = 1;

// Criar usuário
async function create({ nome, email, permissao, setor, unidade }) {
    if (!setor || !unidade) {
        throw new Error('Setor e unidade são obrigatórios');
    }
    if (!Object.keys(permissoes).includes(permissao)) {
        throw new Error('Permissão inválida');
    }
    const usuario = {
        id: nextId++,
        nome,
        email,
        permissao,
        setor,
        unidade,
        ativo: true,
        criadoEm: new Date()
    };
    usuarios.push(usuario);
    return usuario;
}

// Atualizar usuário
async function update(id, { nome, email, permissao, setor, unidade }) {
    const usuario = usuarios.find(u => u.id === Number(id));
    if (!usuario) {
        throw new Error('User not found');
    }
    if (permissao && !Object.keys(permissoes).includes(permissao)) {
        throw new Error('Permissão inválida');
    }
    usuario.nome = nome ?? usuario.nome;
    usuario.email = email ?? usuario.email;
    usuario.permissao = permissao ?? usuario.permissao;
    usuario.setor = setor ?? usuario.setor;
    usuario.unidade = unidade ?? usuario.unidade;
    return usuario;
}

// Ativar/Desativar usuário
async function activate(id) {
    const usuario = usuarios.find(u => u.id === Number(id));
    if (!usuario) {
        throw new Error('User not found');
    }
    usuario.ativo = !usuario.ativo;
    return usuario;
}

// Listar usuários
async function findAll() {
    return usuarios;
}

// Listar usuário por ID
async function findById(id) {
    const usuario = usuarios.find(u => Number(u.id) === Number(id));
    if (!usuario) {
        throw new Error('User not found');
    }
    return usuario;
}

export default {
    create,
    update,
    activate,
    findAll,
    findById
};