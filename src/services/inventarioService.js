// Simulação de "banco de dados" em memória
let inventarios = [];
let nextId = 1;

// Criar inventario
async function create({ descricao }) {
    const inventarioExistente = inventarios.find(u => u.descricao === descricao);
    if (inventarioExistente) {
        throw new Error('inventario já cadastrada.');
    }
    const inventario = {
        id: nextId++,
        descricao,
        ativo: true,
        criadoEm: new Date()
    };
    inventarios.push(inventario);
    return inventario;
}

// Atualizar inventario
async function update(id, { descricao }) {
    const inventario = inventarios.find(u => u.id === Number(id));
    if (!inventario) {
        throw new Error('inventario not found');
    }
    inventario.descricao = descricao ?? inventario.descricao;
    return inventario;
}

// Ativar/Desativar inventario
async function activate(id) {
    const inventario = inventarios.find(u => u.id === Number(id));
    if (!inventario) {
        throw new Error('inventario not found');
    }
    inventario.ativo = !inventario.ativo;
    return inventario;
}

// Listar inventarios
async function findAll() {
    return inventarios;
}

// Listar inventario por ID
async function findById(id) {
    const inventario = inventarios.find(u => Number(u.id) === Number(id));
    if (!inventario) {
        throw new Error('inventario not found');
    }
    return inventario;
}

export default {
    create,
    update,
    activate,
    findAll,
    findById
};