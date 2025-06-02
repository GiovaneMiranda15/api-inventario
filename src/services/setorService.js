// Simulação de "banco de dados" em memória
let setors = [];
let nextId = 1;

// Criar setor
async function create({ descricao }) {
    const setorExistente = setors.find(u => u.descricao === descricao);
    if (setorExistente) {
        throw new Error('setor já cadastrada.');
    }
    const setor = {
        id: nextId++,
        descricao,
        ativo: true,
        criadoEm: new Date()
    };
    setors.push(setor);
    return setor;
}

// Atualizar setor
async function update(id, { descricao }) {
    const setor = setors.find(u => u.id === Number(id));
    if (!setor) {
        throw new Error('setor not found');
    }
    setor.descricao = descricao ?? setor.descricao;
    return setor;
}

// Ativar/Desativar setor
async function activate(id) {
    const setor = setors.find(u => u.id === Number(id));
    if (!setor) {
        throw new Error('setor not found');
    }
    setor.ativo = !setor.ativo;
    return setor;
}

// Listar setors
async function findAll() {
    return setors;
}

// Listar setor por ID
async function findById(id) {
    const setor = setors.find(u => Number(u.id) === Number(id));
    if (!setor) {
        throw new Error('setor not found');
    }
    return setor;
}

export default {
    create,
    update,
    activate,
    findAll,
    findById
};