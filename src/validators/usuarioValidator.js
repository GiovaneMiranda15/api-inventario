import Joi from 'joi';

const usuarioValidator = Joi.object({
    nome: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.base': 'O nome deve ser uma string.',
            'string.empty': 'O nome não pode estar vazio.',
            'string.min': 'O nome deve ter pelo menos {#limit} caracteres.',
            'string.max': 'O nome deve ter no máximo {#limit} caracteres.',
            'any.required': 'O nome é obrigatório.'
        }), 
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'O email deve ser uma string.',
            'string.empty': 'O email não pode estar vazio.',
            'string.email': 'O email deve ser um endereço de email válido.',
            'any.required': 'O email é obrigatório.'
        }),
    unidade: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': 'A unidade deve ser um número.',
            'number.integer': 'A unidade deve ser um número inteiro.',
            'number.min': 'A unidade deve ser maior ou igual a {#limit}.',
            'any.required': 'A unidade é obrigatória.'
        }),
    setor: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': 'O setor deve ser um número.',
            'number.integer': 'O setor deve ser um número inteiro.',
            'number.min': 'O setor deve ser maior ou igual a {#limit}.',
            'any.required': 'O setor é obrigatório.'
        }),
    permissao: Joi.string()
        .valid('ADMIN', 'GERENTE', 'USUARIO')
        .required()
        .messages({
            'string.base': 'A permissão deve ser uma string.',
            'any.only': 'A permissão deve ser um dos seguintes valores: ADMIN, GERENTE, USUARIO.',
            'any.required': 'A permissão é obrigatória.'
        })
});

export default usuarioValidator;