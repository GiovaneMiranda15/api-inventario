// Simulação de "banco de dados" em memória
let unidades = [];
let nextId = 1;

// Criar unidade
async function create({ descricao }) {
    const unidadeExistente = unidades.find(u => u.descricao === descricao);
    if (unidadeExistente) {
        throw new Error('Unidade já cadastrada.');
    }
    const unidade = {
        id: nextId++,
        descricao,
        ativo: true,
        criadoEm: new Date()
    };
    unidades.push(unidade);
    return unidade;
}

// Atualizar unidade
async function update(id, { descricao }) {
    const unidade = unidades.find(u => u.id === Number(id));
    if (!unidade) {
        throw new Error('Unidade not found');
    }
    unidade.descricao = descricao ?? unidade.descricao;
    return unidade;
}

// Ativar/Desativar unidade
async function activate(id) {
    const unidade = unidades.find(u => u.id === Number(id));
    if (!unidade) {
        throw new Error('Unidade not found');
    }
    unidade.ativo = !unidade.ativo;
    return unidade;
}

// Listar unidades
async function findAll() {
    return unidades;
}

// Listar unidade por ID
async function findById(id) {
    const unidade = unidades.find(u => Number(u.id) === Number(id));
    if (!unidade) {
        throw new Error('Unidade not found');
    }
    return unidade;
}

export default {
    create,
    update,
    activate,
    findAll,
    findById
};